import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find } from 'rxjs/operators';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  id;
  results;
  data;
  
  constructor(private route: ActivatedRoute,private searchService: SearchService) {
    this.route.params
    .subscribe( params => this.id = params.find)
   }
  ngOnInit() {
    this.getResult(this.id);
  }
 
  getResult(id){
    console.log(id);
    this.searchService.getResult(id)
    .subscribe(data => {
     this.results = data['results'];
    });
  }
}
