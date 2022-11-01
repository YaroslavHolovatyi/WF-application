import {Component, OnInit} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { WeatherService } from '../Services/weather.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  cityControl = new FormControl('');
  chosenCities: string[] = ['Kyiv', 'Lviv', 'Krakow', 'Berlin', 'London'];
  filteredCities: Observable<string[]> | undefined;
  cityToSearch!: string;

  ngOnInit() {
    this.filteredCities = this.cityControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  constructor(private weatherService: WeatherService){

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.chosenCities.filter(city => city.toLowerCase().includes(filterValue));
  }

  searchForCity(city:string){
    console.log(city);
    this.weatherService.searchForCity(city);
  }
}
