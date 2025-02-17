import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/services/trending.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private trendService : TrendingService) { }
  trend;
  nowplaying;
  results;
  ngOnInit() {
    this.trend = this.trendService.getTrending()
    .subscribe(data =>{
      this.trend=data['results'];
    })
    this.nowplaying = this.trendService.getNowPlaying()
    .subscribe(test=>{
      this.nowplaying=test['results'];
    })
  }
}
