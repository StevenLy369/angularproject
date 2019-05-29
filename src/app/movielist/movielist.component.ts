import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from "../apiservice.service";

@Component({
  selector: 'movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  movieList: any[];

  constructor(private route: ActivatedRoute, private apiService: ApiserviceService) { }

  ngOnInit() {
    this.movieList = this.apiService.getMovieList();
    console.log(this.movieList);
  }

  addFavs(newFav) {
    console.log(newFav);
    this.apiService.addFavs(newFav);
  }

  showMovie(index): void{
    this.movieList[index].show = true;
  }
  
  closeMovie(index){
    this.movieList[index].show = false;
  }
}
