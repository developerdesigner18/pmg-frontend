import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-affiche-film',
  templateUrl: './affiche-film.component.html',
  styleUrls: ['./affiche-film.component.scss']
})
export class AfficheFilmComponent implements OnInit {

  constructor(private filmService : FilmService) { }
  films;
  results;
  ngOnInit() {
    this.films = this.filmService.getFilm()
    .subscribe(data =>{
      this.films=data['results'];
    })
  }

}
