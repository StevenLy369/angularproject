import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  apikey: string = "f28aaf44cf6e1d7966838d2e0379f41b";
  movieList: any[] = []
  favList: any[] = []

  constructor(private http: HttpClient, private router: Router) { }

  getImdbData(searchResult:string){
    this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&query=${searchResult}`).subscribe(response => {
      console.log(response);
      this.movieList = response["results"];  
      this.router.navigate(["/movielist"]);
    });;
  }

  // getImdbGenre(genreResult:string, genreId:number, genreList){
  //   genreList = [
      
  //         {
  //           id: 28,
  //           "name": "Action"
  //         },
  //         {
  //           id: 12,
  //           "name": "Adventure"
  //         },
  //         {
  //           id: 16,
  //           "name": "Animation"
  //         },
  //         {
  //           "id": 35,
  //           "name": "Comedy"
  //         },
  //         {
  //           "id": 80,
  //           "name": "Crime"
  //         },
  //         {
  //           "id": 99,
  //           "name": "Documentary"
  //         },
  //         {
  //           "id": 18,
  //           "name": "Drama"
  //         },
  //         {
  //           "id": 10751,
  //           "name": "Family"
  //         },
  //         {
  //           "id": 14,
  //           "name": "Fantasy"
  //         },
  //         {
  //           "id": 36,
  //           "name": "History"
  //         },
  //         {
  //           "id": 27,
  //           "name": "Horror"
  //         },
  //         {
  //           "id": 10402,
  //           "name": "Music"
  //         },
  //         {
  //           "id": 9648,
  //           "name": "Mystery"
  //         },
  //         {
  //           "id": 10749,
  //           "name": "Romance"
  //         },
  //         {
  //           "id": 878,
  //           "name": "Science Fiction"
  //         },
  //         {
  //           "id": 10770,
  //           "name": "TV Movie"
  //         },
  //         {
  //           "id": 53,
  //           "name": "Thriller"
  //         },
  //         {
  //           "id": 10752,
  //           "name": "War"
  //         },
  //         {
  //           "id": 37,
  //           "name": "Western"
  //         }
  //       ];
      
    
  //   for(let i = 0; i < genreList.length; i++ ) {
  //     if (genreResult == genreList[i].name) {
  //       genreId = genreList[i].id
  //       break;
  //     }
  //   };

  //   this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`).subscribe(response => {
  //     console.log(response);
  //     this.movieList = response["results"];
  //     this.router.navigate(["/movielist"]);
  //   });
  // }


  getMovieList() {
    return this.movieList;
  }

  getFavList() {
    return this.favList;
  }

  getImdbGenre(genreResult:string){
    let genreID: number;
    // loop through genreList to find the id...assign it to genreID.
      let genreList: any[] = [
        {
          id: 28,
          name: "Action"
        },
        {
          id: 12,
          "name": "Adventure"
        },
        {
          id: 16,
          "name": "Animation"
        },
        {
          id: 35,
          "name": "Comedy"
        },
        {
          id: 80,
          "name": "Crime"
        },
        {
          id: 99,
          "name": "Documentary"
        },
        {
          id: 18,
          "name": "Drama"
        },
        {
          id: 10751,
          "name": "Family"
        },
        {
          id: 14,
          "name": "Fantasy"
        },
        {
          id: 36,
          "name": "History"
        },
        {
          id: 27,
          "name": "Horror"
        },
        {
          id: 10402,
          "name": "Music"
        },
        {
          id: 9648,
          "name": "Mystery"
        },
        {
          id: 10749,
          "name": "Romance"
        },
        {
          id: 878,
          "name": "Science Fiction"
        },
        {
          id: 10770,
          "name": "TV Movie"
        },
        {
          id: 53,
          "name": "Thriller"
        },
        {
          id: 10752,
          "name": "War"
        },
        {
          id: 37,
          "name": "Western"
        }
      ];
      for (let i = 0; i < genreList.length; i++) {
        if (genreResult === genreList[i].name.toLowerCase()) {
          genreID = genreList[i].id
          break;
        }
      }
    this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreID}`).subscribe(response => {
      console.log(response);
      this.movieList = response["results"];
      this.router.navigate(["/movielist"]);
    })
  }

  getImdbRating(ratingResult: string) {
    this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=f28aaf44cf6e1d7966838d2e0379f41b&language=en-US&certification_country=US&certification=${ratingResult}&include_adult=false&include_video=false&page=1`).subscribe(response => {
      console.log(response);
      this.movieList = response["results"];  
      this.router.navigate(["/movielist"]);
    });;
  }

  getImdbYear(yearResult: string) {
    this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=f28aaf44cf6e1d7966838d2e0379f41b&language=en-US&include_adult=false&include_video=false&page=1&primary_release_year=${yearResult}`).subscribe(response => {
      console.log(response);
      this.movieList = response["results"];  
      this.router.navigate(["/movielist"]);
    });;
  }
  

  addFavs(newFav): any[] {
    this.favList.push(newFav);
    console.log(this.favList);
    return this.favList;
  }

  getFav(id: number | string): any {
    let index = this.favList.findIndex(fav => fav.id == id);
    return this.favList[index];
  }

  




}
