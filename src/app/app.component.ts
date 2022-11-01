import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CityCard } from './interfaces - ready/city-weather.interface';
import { LocalStorService } from './Services/local-stor.service';
import { WeatherService } from './Services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'weather-forecast app';
  cities: CityCard[] =[];
  geoPermit = confirm('Do you agree to share your geolocation with us?')

  
  constructor(private weatherService: WeatherService,
              private localStorage: LocalStorService){
      this.cities = this.weatherService.cities;
      this.geoPermit
      this.weatherService.searchForTheLocation(this.geoPermit);
  }

  showSavedCities(){
    console.log('Cities, which are here: '+this.cities);
    this.cities = this.localStorage.getSavedCities();
  }

  continueSearch(){
    this.cities = this.weatherService.cities
  }

  ngOnInit(){

    
  }
}
