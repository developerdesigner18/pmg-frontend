import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-affiche-serie',
  templateUrl: './affiche-serie.component.html',
  styleUrls: ['./affiche-serie.component.scss']
})
export class AfficheSerieComponent implements OnInit {

  
  constructor(private serieService : SerieService) { }
  series;
  results;
  ngOnInit() {
    this.series = this.serieService.getSeries()
    .subscribe(data =>{
      this.series=data['results'];
    })
}
}
