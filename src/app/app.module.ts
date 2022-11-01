import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar - ready/toolbar.component';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from './Modules/material - ready/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityCardComponent } from './city-card - ready/city-card.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './Services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchComponent,
    CityCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
