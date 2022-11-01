import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CityCard } from '../interfaces - ready/city-weather.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  cities: CityCard[] = [];
  chosenCities: CityCard[] = [];

  private APPID: string;
  private API_URL: string;
  private GEO_URL: string;

  constructor(private _http: HttpClient) { 
    console.log('Weather Items Service Init...');
    this.APPID = '13c04b432dde96a8e08c59a68a4c0b12';
    this.API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
    this.GEO_URL = 'http://api.openweathermap.org/geo/1.0/reverse?lat=';

  }

  searchForCityWeather(cityName:string):Observable<any>{
    console.log('searchForCityWeather: ' + cityName);
    return this._http.get<CityCard>(this.API_URL + cityName + '&APPID=' + this.APPID + '&units=metric');
  }
  

  searchForCity(city: string){
    console.log('Service work' + city);
    this.searchForCityWeather(city)
    .subscribe(
      val =>{
        this.checkIfAlreadyExists(city) ?  this.cities : this.cities.push(val);
      }
    );
    console.log(this.cities);
  }

  
  checkIfAlreadyExists(city:string){
    let arrra = [];
    this.cities.forEach(element=>arrra.push(element.name));
    return arrra.includes(city);
  }
  checkForLocal(city:string){
    let arrra = [];
    this.chosenCities.forEach(element=>arrra.push(element.name));
    return arrra.includes(city);
  }
  
  pushThisCity(city:CityCard){
    this.checkForLocal(city.name) ? console.log(this.chosenCities) : this.chosenCities.push(city);
    console.log("Cjosen cities: "+ this.chosenCities);
    
    localStorage.setItem('chosenCities', JSON.stringify(this.chosenCities))
    console.log('the city: ' + city.name + ' is saved!');
    console.log(localStorage.getItem('chosenCities'));
    
  }
  
  searchForLocation(longitude:number, latitude: number):Observable<any>{
    return this._http.get<CityCard>(this.GEO_URL + latitude + '&lon=' + longitude + '&APPID=' + this.APPID);
  }

  searchForTheLocation(geoloc){
    if(geoloc){
      navigator.geolocation.getCurrentPosition((position)=>{
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        console.log('longitude: '+longitude+'latitude: '+latitude);
        
        this.searchForLocation(longitude, latitude)
        .subscribe(
          val =>{
            console.log(val);
            this.searchForCity(val[0].name)
          }
        );
      })
    }
    else{
      alert('Geolocation service declined.')
    }
  }
}
