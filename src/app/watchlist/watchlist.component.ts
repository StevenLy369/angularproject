import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from "../apiservice.service";

@Component({
  selector: 'watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  favList: any[];


  constructor(private route: ActivatedRoute, private apiService: ApiserviceService) { }

  ngOnInit() {
    this.favList = this.apiService.getFavList();
    console.log(this.favList);
  }
  showMovie(index): void{
    this.favList[index].show = true;
  }
  
  closeMovie(index){
    this.favList[index].show = false;
  }


}
