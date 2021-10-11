import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfficheFilmComponent } from './components/affiche-film/affiche-film.component';
import { AfficheSerieComponent } from './components/affiche-serie/affiche-serie.component';
import { DetailFilmComponent } from './components/detail-film/detail-film.component';
import { DetailSerieComponent } from './components/detail-serie/detail-serie.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'films', component:AfficheFilmComponent},
  {path:'series', component:AfficheSerieComponent},
  {path:'detailfilm/:id', component:DetailFilmComponent},
  {path:'detailserie/:id', component:DetailSerieComponent},
  {path:'search/:find', component:SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
