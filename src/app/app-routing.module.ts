import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDividerModule, MatExpansionModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule, MatToolbarModule, MatFormFieldModule, MatButtonToggleModule, MatTreeModule, MatBadgeModule, MatGridListModule, MatRadioModule, MatDatepickerModule, MatTooltipModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

import { AfficheFilmComponent } from './components/affiche-film/affiche-film.component';
import { AfficheSerieComponent } from './components/affiche-serie/affiche-serie.component';
import { DetailFilmComponent } from './components/detail-film/detail-film.component';
import { DetailSerieComponent } from './components/detail-serie/detail-serie.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'films', component:AfficheFilmComponent},
  {path:'series', component:AfficheSerieComponent},
  {path:'detailfilm/:id', component:DetailFilmComponent},
  {path:'detailserie/:id', component:DetailSerieComponent},
  {path:'search/:find', component:SearchComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent}, 
  {path:'user-profile', component:RegisterComponent}, 
];


const materialModules = [
  CdkTreeModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonToggleModule,
  MatTreeModule,
  OverlayModule,
  PortalModule,
  MatBadgeModule,
  MatGridListModule,
  MatRadioModule,
  MatDatepickerModule,
  MatTooltipModule
];

@NgModule({
  imports:
  [RouterModule.forRoot(routes),
        CommonModule,
    ...materialModules
  ],
  exports: [RouterModule,
    ...materialModules

  ]
})
export class AppRoutingModule { }
