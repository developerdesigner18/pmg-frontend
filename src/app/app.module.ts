import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

;
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AfficheFilmComponent } from 'src/app/components/affiche-film/affiche-film.component';

import { LandingComponent } from './components/landing/landing.component';
import { NavComponent } from './components/nav/nav.component';
import { AfficheSerieComponent } from './components/affiche-serie/affiche-serie.component';
import { DetailFilmComponent } from './components/detail-film/detail-film.component';
import { DetailSerieComponent } from './components/detail-serie/detail-serie.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AfficheFilmComponent,
    AfficheSerieComponent,
    HomeComponent,
    DetailFilmComponent,
    DetailSerieComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
