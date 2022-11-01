import { Injectable } from '@angular/core';
import { CityCard } from '../interfaces - ready/city-weather.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalStorService {

  savedCities: CityCard[];

  constructor() { }

  getSavedCities(){
    console.log('Started retriewing saved cities...');
    let savedCities = localStorage.getItem('chosenCities');
    this.savedCities = JSON.parse(savedCities);
    console.log('savedCities from local Storage: '+this.savedCities);
    return this.savedCities;
    
  }
}
