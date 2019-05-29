import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from "../apiservice.service"

@Component({
  selector: 'searchcriteria',
  templateUrl: './searchcriteria.component.html',
  styleUrls: ['./searchcriteria.component.css']
})
export class SearchcriteriaComponent implements OnInit {
  
  movieList:any[] = []
 

  

  constructor(private apiService: ApiserviceService ) { }

  ngOnInit() {
  }
    searchImdb(form){

      

    this.apiService.getImdbData(form.value.searchResult);
  }

  searchGenre(form){

    this.apiService.getImdbGenre(form.value.genreResult);
  }


  // addFavs(newFav) {
  //   console.log(newFav);
  //   this.apiService.addFavs(newFav);
  // }
}
