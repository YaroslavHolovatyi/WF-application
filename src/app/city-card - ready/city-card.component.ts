import { Component, Input, OnInit } from '@angular/core';
import { CityCard } from '../interfaces - ready/city-weather.interface';
import { WeatherService } from '../Services/weather.service';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.css']
})
export class CityCardComponent implements OnInit {

  @Input()
  city!: CityCard;

  constructor(private weatherService:WeatherService) {}



  ngOnInit(): void {
    console.log(this.city);
  }

  addToSaved(){
    console.log('Add to saved pushed!');
    
    this.weatherService.pushThisCity(this.city);
  }

}
