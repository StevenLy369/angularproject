(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/apiservice.service.ts":
/*!***************************************!*\
  !*** ./src/app/apiservice.service.ts ***!
  \***************************************/
/*! exports provided: ApiserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiserviceService", function() { return ApiserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ApiserviceService = /** @class */ (function () {
    function ApiserviceService(http, router) {
        this.http = http;
        this.router = router;
        this.apikey = "f28aaf44cf6e1d7966838d2e0379f41b";
        this.movieList = [];
        this.favList = [];
    }
    ApiserviceService.prototype.getImdbData = function (searchResult) {
        var _this = this;
        this.http.get("https://api.themoviedb.org/3/search/movie?api_key=" + this.apikey + "&query=" + searchResult).subscribe(function (response) {
            console.log(response);
            _this.movieList = response["results"];
            _this.router.navigate(["/movielist"]);
        });
        ;
    };
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
    ApiserviceService.prototype.getMovieList = function () {
        return this.movieList;
    };
    ApiserviceService.prototype.getFavList = function () {
        return this.favList;
    };
    ApiserviceService.prototype.getImdbGenre = function (genreResult) {
        var _this = this;
        var genreID;
        // loop through genreList to find the id...assign it to genreID.
        var genreList = [
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
        for (var i = 0; i < genreList.length; i++) {
            if (genreResult === genreList[i].name.toLowerCase()) {
                genreID = genreList[i].id;
                break;
            }
        }
        this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=" + this.apikey + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=" + genreID).subscribe(function (response) {
            console.log(response);
            _this.movieList = response["results"];
            _this.router.navigate(["/movielist"]);
        });
    };
    ApiserviceService.prototype.getImdbRating = function (ratingResult) {
        var _this = this;
        this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=f28aaf44cf6e1d7966838d2e0379f41b&language=en-US&certification_country=US&certification=" + ratingResult + "&include_adult=false&include_video=false&page=1").subscribe(function (response) {
            console.log(response);
            _this.movieList = response["results"];
            _this.router.navigate(["/movielist"]);
        });
        ;
    };
    ApiserviceService.prototype.getImdbYear = function (yearResult) {
        var _this = this;
        this.http.get("https://api.themoviedb.org/3/discover/movie?api_key=f28aaf44cf6e1d7966838d2e0379f41b&language=en-US&include_adult=false&include_video=false&page=1&primary_release_year=" + yearResult).subscribe(function (response) {
            console.log(response);
            _this.movieList = response["results"];
            _this.router.navigate(["/movielist"]);
        });
        ;
    };
    ApiserviceService.prototype.addFavs = function (newFav) {
        this.favList.push(newFav);
        console.log(this.favList);
        return this.favList;
    };
    ApiserviceService.prototype.getFav = function (id) {
        var index = this.favList.findIndex(function (fav) { return fav.id == id; });
        return this.favList[index];
    };
    ApiserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ApiserviceService);
    return ApiserviceService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    /* background-size: 250px;\r\n    background-repeat: repeat;\r\n    background-position: center;\r\n    background-attachment: fixed; */\r\n    font-family: 'Roboto', sans-serif;\r\n }\r\n\r\n\r\nheader{\r\n    background-color: rgb(24, 24, 39);\r\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\r\n    padding: 10px 0;\r\n }\r\n\r\n\r\nnav{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    width: 50%;\r\n    color: yellow;\r\n    font: 50px;\r\n    font-weight:  bold;\r\n   border-radius: 0 !important;\r\n \r\n }\r\n\r\n\r\n.navlink{\r\n    padding: 15px;\r\n }\r\n\r\n\r\n/* h3{\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 300px;\r\n } */\r\n\r\n\r\n.routerNav {\r\n    color: yellow;\r\n    font: 50px;\r\n    font-weight: bold;\r\n    width: 50%;\r\n    align-self: center;\r\n}\r\n\r\n\r\n.routerNav a:hover {\r\n   color: #fff;\r\n   transition: .5s ease;\r\n}\r\n\r\n\r\n.routerNav > a {\r\n   color: yellow;\r\n   text-decoration: none;\r\n   margin: 15px;\r\n   transition: .5s ease-out;\r\n}\r\n\r\n\r\n/* \r\n.logo {\r\n   width: 250px;\r\n   height: 250px;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTs7O21DQUcrQjtJQUMvQixpQ0FBaUM7Q0FDcEM7OztBQUdEO0lBQ0ksaUNBQWlDO0lBQ2pDLGlGQUFpRjtJQUNqRixlQUFlO0NBQ2xCOzs7QUFFRDtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0dBQ25CLDJCQUEyQjs7Q0FFN0I7OztBQUVBO0lBQ0csYUFBYTtDQUNoQjs7O0FBRUE7Ozs7SUFJRzs7O0FBRUg7SUFDRyxhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOzs7QUFDQTtHQUNHLFdBQVc7R0FDWCxvQkFBb0I7QUFDdkI7OztBQUVBO0dBQ0csYUFBYTtHQUNiLHFCQUFxQjtHQUNyQixZQUFZO0dBQ1osd0JBQXdCO0FBQzNCOzs7QUFDQTs7OztHQUlHIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIC8qIGJhY2tncm91bmQtc2l6ZTogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgKi9cclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuIH1cclxuXHJcblxyXG5oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAzOSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiB9XHJcbiBcclxubmF2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgY29sb3I6IHllbGxvdztcclxuICAgIGZvbnQ6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogIGJvbGQ7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuIFxyXG4gfVxyXG4gXHJcbiAubmF2bGlua3tcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiB9XHJcbiBcclxuIC8qIGgze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiB9ICovXHJcblxyXG4gLnJvdXRlck5hdiB7XHJcbiAgICBjb2xvcjogeWVsbG93O1xyXG4gICAgZm9udDogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4ucm91dGVyTmF2IGE6aG92ZXIge1xyXG4gICBjb2xvcjogI2ZmZjtcclxuICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbn1cclxuXHJcbi5yb3V0ZXJOYXYgPiBhIHtcclxuICAgY29sb3I6IHllbGxvdztcclxuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICBtYXJnaW46IDE1cHg7XHJcbiAgIHRyYW5zaXRpb246IC41cyBlYXNlLW91dDtcclxufVxyXG4vKiBcclxuLmxvZ28ge1xyXG4gICB3aWR0aDogMjUwcHg7XHJcbiAgIGhlaWdodDogMjUwcHg7XHJcbn0gKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"routerNav\">\r\n    <a routerLink=\"/search\" routerLinkActive=\"active\">Search</a>\r\n    <a routerLink=\"/movielist\" routerLinkActive=\"active\">Movies</a>\r\n    <a routerLink=\"/watchlist\" routerLinkActive=\"active\">Favorites</a>\r\n  </div>\r\n  <nav>\r\n    <a class=\"navlink\">Welcome Back: Bob</a>\r\n    <a class=\"navlink\">Create Account</a>\r\n    <a class=\"navlink\">Find a Theater</a>\r\n  </nav>\r\n</header>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n <movielist></movielist> \r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angularproject';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _searchcriteria_searchcriteria_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchcriteria/searchcriteria.component */ "./src/app/searchcriteria/searchcriteria.component.ts");
/* harmony import */ var _movielist_movielist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./movielist/movielist.component */ "./src/app/movielist/movielist.component.ts");
/* harmony import */ var _watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./watchlist/watchlist.component */ "./src/app/watchlist/watchlist.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./apiservice.service */ "./src/app/apiservice.service.ts");











var appRoutes = [
    { path: "search", component: _searchcriteria_searchcriteria_component__WEBPACK_IMPORTED_MODULE_6__["SearchcriteriaComponent"] },
    { path: "movielist", component: _movielist_movielist_component__WEBPACK_IMPORTED_MODULE_7__["MovielistComponent"] },
    { path: "watchlist", component: _watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_8__["WatchlistComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _searchcriteria_searchcriteria_component__WEBPACK_IMPORTED_MODULE_6__["SearchcriteriaComponent"],
                _movielist_movielist_component__WEBPACK_IMPORTED_MODULE_7__["MovielistComponent"],
                _watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_8__["WatchlistComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_apiservice_service__WEBPACK_IMPORTED_MODULE_10__["ApiserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/movielist/movielist.component.css":
/*!***************************************************!*\
  !*** ./src/app/movielist/movielist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".listcontainer{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    grid-gap: 30px;\r\n    justify-content: center;\r\n    align-self: center;\r\n    margin: 30px;\r\n }\r\n \r\n .movieobject{\r\n    border-radius: 12px;\r\n   justify-content: center;\r\n   align-content: flex-end;\r\n   background-color: #fff;\r\n   box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\r\n   transition: .5s ease-in;\r\n }\r\n \r\n .movieobject:hover {\r\n   -webkit-transform: scale(1.02);\r\n           transform: scale(1.02);\r\n   transition: .3s ease-out;\r\n}\r\n \r\n .movieText {\r\n    padding: 15px;\r\n    margin-bottom: 2px;\r\n }\r\n \r\n .extra {\r\n    display: flex;\r\n }\r\n \r\n .extra span {\r\n   color: grey;\r\n   background-color: rgba(240, 240, 240, 0.911);\r\n   border-radius: 12px;\r\n   padding: 3px 10px;\r\n }\r\n \r\n #extra-r {\r\n    margin-left: 5px;\r\n }\r\n \r\n .title {\r\n   font-weight: 800;\r\n}\r\n \r\n img{\r\n    border-radius: 12px 12px 0px 0px;\r\n    width: 100%;\r\n    height: 350px;\r\n }\r\n \r\n .favIcon {\r\n    width: 30px;\r\n    height:30px;\r\n    position: absolute;\r\n    z-index: 500;\r\n    border-radius: 50px;\r\n    cursor: pointer;\r\n    margin: 10px 10px;\r\n }\r\n \r\n .container{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n }\r\n \r\n SearchCriteria Styles\r\n \r\n .search{\r\n    display: flex;\r\n    background-color:rgb(179,178,176, 0.6);\r\n    justify-content: center;\r\n    Height: 50vh;\r\n    width: 50vw;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    border-radius: 5px;\r\n    position: absolute;\r\n    top: 100px;\r\n    left: 400px;\r\n }\r\n \r\n main{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    height: 0vh;\r\n    position: relative;\r\n }\r\n \r\n form{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n \r\n }\r\n \r\n input{\r\n    height: 40px;\r\n    width: 500px;\r\n    border-radius: 5px;\r\n    align-items: stretch;\r\n    margin-top: 75px;\r\n    margin-bottom: 75px;\r\n }\r\n \r\n label{\r\n    display: flex;\r\n    justify-content: center;\r\n    font-size: 40px;\r\n }\r\n \r\n button{\r\n    height: 50px;\r\n    width: 100%;\r\n    border-radius: 10px;\r\n    background-color: white;\r\n }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVsaXN0L21vdmllbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0NBQ2Y7O0NBRUE7SUFDRyxtQkFBbUI7R0FDcEIsdUJBQXVCO0dBQ3ZCLHVCQUF1QjtHQUN2QixzQkFBc0I7R0FDdEIsbUZBQW1GO0dBQ25GLHVCQUF1QjtDQUN6Qjs7Q0FDRDtHQUNHLDhCQUFzQjtXQUF0QixzQkFBc0I7R0FDdEIsd0JBQXdCO0FBQzNCOztDQUVDO0lBQ0csYUFBYTtJQUNiLGtCQUFrQjtDQUNyQjs7Q0FDQTtJQUNHLGFBQWE7Q0FDaEI7O0NBQ0E7R0FDRSxXQUFXO0dBQ1gsNENBQTRDO0dBQzVDLG1CQUFtQjtHQUNuQixpQkFBaUI7Q0FDbkI7O0NBQ0E7SUFDRyxnQkFBZ0I7Q0FDbkI7O0NBRUE7R0FDRSxnQkFBZ0I7QUFDbkI7O0NBRUM7SUFDRyxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGFBQWE7Q0FDaEI7O0NBR0E7SUFDRyxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7Q0FDcEI7O0NBR0E7SUFDRyxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtDQUNqQzs7Q0FFQTs7O0lBR0csYUFBYTtJQUNiLHNDQUFzQztJQUN0Qyx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7Q0FDZDs7Q0FFQTtJQUNHLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxrQkFBa0I7Q0FDckI7O0NBRUE7SUFDRyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1Qjs7Q0FFMUI7O0NBRUE7SUFDRyxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtDQUN0Qjs7Q0FFQTtJQUNHLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtDQUNsQjs7Q0FFQTtJQUNHLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1QjtDQUMxQiIsImZpbGUiOiJzcmMvYXBwL21vdmllbGlzdC9tb3ZpZWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0Y29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDMwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMzBweDtcclxuIH1cclxuIFxyXG4gLm1vdmllb2JqZWN0e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCA0cHggNnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgdHJhbnNpdGlvbjogLjVzIGVhc2UtaW47XHJcbiB9XHJcbi5tb3ZpZW9iamVjdDpob3ZlciB7XHJcbiAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgIHRyYW5zaXRpb246IC4zcyBlYXNlLW91dDtcclxufVxyXG5cclxuIC5tb3ZpZVRleHQge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuIH1cclxuIC5leHRyYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gfVxyXG4gLmV4dHJhIHNwYW4ge1xyXG4gICBjb2xvcjogZ3JleTtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDI0MCwgMjQwLCAwLjkxMSk7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gfVxyXG4gI2V4dHJhLXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuIH1cclxuXHJcbiAudGl0bGUge1xyXG4gICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbiBcclxuIGltZ3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHggMTJweCAwcHggMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gfVxyXG5cclxuXHJcbiAuZmF2SWNvbiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogNTAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gfVxyXG4gXHJcbiBcclxuIC5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuIH1cclxuIFxyXG4gU2VhcmNoQ3JpdGVyaWEgU3R5bGVzXHJcbiBcclxuIC5zZWFyY2h7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTc5LDE3OCwxNzYsIDAuNik7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIEhlaWdodDogNTB2aDtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG4gICAgbGVmdDogNDAwcHg7XHJcbiB9XHJcbiBcclxuIG1haW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIH1cclxuIFxyXG4gZm9ybXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiBcclxuIH1cclxuIFxyXG4gaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIG1hcmdpbi10b3A6IDc1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xyXG4gfVxyXG4gXHJcbiBsYWJlbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuIH1cclxuIFxyXG4gYnV0dG9ue1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiB9XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/movielist/movielist.component.html":
/*!****************************************************!*\
  !*** ./src/app/movielist/movielist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n<div *ngFor =\"let movie of movieList\">\r\n  <p>Title: {{ results.title}} </p>\r\n  \r\n\r\n</div> -->\r\n\r\n<!-- \r\n\r\n <form #imdbForm=\"ngForm\" (ngSubmit)=\"searchImdb(imdbForm)\">\r\n  <label for=\"\">Which Sub?</label>\r\n  <input type=\"text\" ngModel name=\"searchResult\">\r\n  <button>Search</button>\r\n</form> -->\r\n\r\n<!-- <searchcriteria></searchcriteria> -->\r\n<section class=\"listcontainer\">\r\n  <div *ngFor =\"let movie of movieList; index as i\">\r\n    <div class=\"movieobject\">\r\n      <div class=\"movieHead\">\r\n        <img class=\"favIcon\" src=\"data:image/jpeg;base64,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\" (click)=\"addFavs(movie)\">\r\n        <img src=\"https://image.tmdb.org/t/p/w500/{{ movie.poster_path }}\" height=\"350\" alt=\"{{ movie.title }}\">\r\n      </div>\r\n      <div class=\"movieText\">\r\n          <h2 class=\"title\">{{ movie.title }}</h2>\r\n          <p>{{ movie.overview }}</p>\r\n          <div class=\"extra\">\r\n            <span id=\"extra-l\">Category</span>\r\n            <span id=\"extra-r\">Year</span>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/movielist/movielist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/movielist/movielist.component.ts ***!
  \**************************************************/
/*! exports provided: MovielistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovielistComponent", function() { return MovielistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");




var MovielistComponent = /** @class */ (function () {
    function MovielistComponent(route, apiService) {
        this.route = route;
        this.apiService = apiService;
    }
    MovielistComponent.prototype.ngOnInit = function () {
        this.movieList = this.apiService.getMovieList();
        console.log(this.movieList);
    };
    MovielistComponent.prototype.addFavs = function (newFav) {
        console.log(newFav);
        this.apiService.addFavs(newFav);
    };
    MovielistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'movielist',
            template: __webpack_require__(/*! ./movielist.component.html */ "./src/app/movielist/movielist.component.html"),
            styles: [__webpack_require__(/*! ./movielist.component.css */ "./src/app/movielist/movielist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"]])
    ], MovielistComponent);
    return MovielistComponent;
}());



/***/ }),

/***/ "./src/app/searchcriteria/searchcriteria.component.css":
/*!*************************************************************!*\
  !*** ./src/app/searchcriteria/searchcriteria.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n    margin: 15px 0px;\r\n   }\r\n .search-form {\r\n     background-color: #fff;\r\n     width: 300px;\r\n     border-radius: 12px;\r\n     padding: 30px;\r\n     margin: auto;\r\n     box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\r\n     margin-top: 40px;\r\n }\r\n input {\r\n    height: 30px;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    border: 1px solid rgba(214, 214, 214, 0.822);\r\n}\r\n h2 {\r\n    margin-bottom: 2px;\r\n}\r\n label {\r\n    font-size: 24px;\r\n    color: rgb(41, 41, 41);\r\n}\r\n button {\r\n    background-color: #2b6cb0;\r\n    border: 1px solid #2b6cb0;\r\n    color: #fff;\r\n    border-radius: 8px;\r\n    padding: .8rem 2rem;\r\n    cursor: pointer;\r\n}\r\n button:hover {\r\n    opacity: .8;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoY3JpdGVyaWEvc2VhcmNoY3JpdGVyaWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtHQUNqQjtDQUNGO0tBQ0ksc0JBQXNCO0tBQ3RCLFlBQVk7S0FDWixtQkFBbUI7S0FDbkIsYUFBYTtLQUNiLFlBQVk7S0FDWixtRkFBbUY7S0FDbkYsZ0JBQWdCO0NBQ3BCO0NBQ0Q7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw0Q0FBNEM7QUFDaEQ7Q0FDQTtJQUNJLGtCQUFrQjtBQUN0QjtDQUNBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjtDQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0NBQ0E7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2hjcml0ZXJpYS9zZWFyY2hjcml0ZXJpYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4O1xyXG4gICB9XHJcbiAuc2VhcmNoLWZvcm0ge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgcGFkZGluZzogMzBweDtcclxuICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuIH1cclxuaW5wdXQge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIxNCwgMjE0LCAyMTQsIDAuODIyKTtcclxufVxyXG5oMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxubGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6IHJnYig0MSwgNDEsIDQxKTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjZjYjA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMmI2Y2IwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiAuOHJlbSAycmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAuODtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/searchcriteria/searchcriteria.component.html":
/*!**************************************************************!*\
  !*** ./src/app/searchcriteria/searchcriteria.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-form\">\r\n   <form #imdbForm=\"ngForm\" (ngSubmit)=\"searchImdb(imdbForm)\">\r\n    <label for=\"searchResult\"><h2>Which Movie?</h2></label>\r\n    <input type=\"text\" ngModel name=\"searchResult\"><br><br>\r\n    <button>Search</button>\r\n  </form> \r\n\r\n  <form #genreForm=\"ngForm\" (ngSubmit)=\"searchGenre(genreForm)\">\r\n  <label for=\"genreResult\"><h2>Which Genre</h2></label>\r\n  <input type=\"text\" ngModel name=\"genreResult\"><br><br>\r\n  <button>Search</button>\r\n </form>\r\n\r\n <form #ratingForm=\"ngForm\" (ngSubmit)=\"searchRating(ratingForm)\">\r\n  <label for=\"ratingResult\"><h2>Rating</h2></label>\r\n  <input type=\"text\" ngModel name=\"ratingResult\"><br><br>\r\n  <button>Search</button>\r\n </form>\r\n\r\n <form #yearForm=\"ngForm\" (ngSubmit)=\"searchYear(yearForm)\">\r\n  <label for=\"yearResult\"><h2>Year</h2></label>\r\n  <input type=\"text\" ngModel name=\"yearResult\"><br><br>\r\n  <button>Search</button>\r\n </form>\r\n</div>\r\n\r\n<!-- <a routerLink=\"/watchlist\" routerLinkActive=\"active\">Favorites</a>\r\n<router-outlet></router-outlet> -->\r\n\r\n \r\n  <!-- <div *ngFor =\"let movie of movieList; index as i\">\r\n  <p>Title: {{ movie.title }}</p>\r\n   <p>Description: {{ movie.overview }} </p>\r\n  <img src=\"https://image.tmdb.org/t/p/w500/{{ movie.poster_path }}\" alt=\"\">\r\n  <span (click)=\"addFavs(movie)\">X</span>\r\n\r\n</div> -->\r\n\r\n<!-- <movielist></movielist> -->\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/searchcriteria/searchcriteria.component.ts":
/*!************************************************************!*\
  !*** ./src/app/searchcriteria/searchcriteria.component.ts ***!
  \************************************************************/
/*! exports provided: SearchcriteriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchcriteriaComponent", function() { return SearchcriteriaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");



var SearchcriteriaComponent = /** @class */ (function () {
    function SearchcriteriaComponent(apiService) {
        this.apiService = apiService;
        this.movieList = [];
    }
    SearchcriteriaComponent.prototype.ngOnInit = function () {
    };
    SearchcriteriaComponent.prototype.searchImdb = function (form) {
        this.apiService.getImdbData(form.value.searchResult);
    };
    SearchcriteriaComponent.prototype.searchGenre = function (form) {
        this.apiService.getImdbGenre(form.value.genreResult);
    };
    SearchcriteriaComponent.prototype.searchRating = function (form) {
        this.apiService.getImdbRating(form.value.ratingResult);
    };
    SearchcriteriaComponent.prototype.searchYear = function (form) {
        this.apiService.getImdbYear(form.value.yearResult);
    };
    SearchcriteriaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'searchcriteria',
            template: __webpack_require__(/*! ./searchcriteria.component.html */ "./src/app/searchcriteria/searchcriteria.component.html"),
            styles: [__webpack_require__(/*! ./searchcriteria.component.css */ "./src/app/searchcriteria/searchcriteria.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_apiservice_service__WEBPACK_IMPORTED_MODULE_2__["ApiserviceService"]])
    ], SearchcriteriaComponent);
    return SearchcriteriaComponent;
}());



/***/ }),

/***/ "./src/app/watchlist/watchlist.component.css":
/*!***************************************************!*\
  !*** ./src/app/watchlist/watchlist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    font: 300px;\r\n    color: rgb(59, 59, 59);\r\n    font-size: 36px;\r\n    text-align: left;\r\n    margin-left: 0 30px;\r\n    font-weight: 800;\r\n}\r\n.favorite-header {\r\n    padding: 0 30px;\r\n    margin-bottom: 30px;\r\n    border-bottom: 2px solid rgba(155, 155, 155, 0.219);\r\n}\r\n.watch-container{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    grid-gap: 30px;\r\n    align-self: center;\r\n    margin: 30px;\r\n }\r\n.favorite{\r\n    border-radius: 12px;\r\n   justify-content: center;\r\n   align-content: flex-end;\r\n   background-color: #fff;\r\n   box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\r\n   transition: .5s ease-in;\r\n }\r\n.favorite:hover {\r\n   -webkit-transform: scale(1.02);\r\n           transform: scale(1.02);\r\n   transition: .3s ease-out;\r\n}\r\n.favorite-bottom {\r\n    padding: 15px;\r\n    margin-bottom: 2px;\r\n }\r\nimg{\r\n    border-radius: 12px 12px 0px 0px;\r\n    width: 100%;\r\n    height: 350px;\r\n }\r\n.fav {\r\n    display: flex;\r\n }\r\n.fav span {\r\n   color: grey;\r\n   background-color: rgba(240, 240, 240, 0.911);\r\n   border-radius: 12px;\r\n   padding: 3px 10px;\r\n }\r\n#fav-r {\r\n    margin-left: 5px;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2F0Y2hsaXN0L3dhdGNobGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsbURBQW1EO0FBQ3ZEO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtDQUNmO0FBQ0E7SUFDRyxtQkFBbUI7R0FDcEIsdUJBQXVCO0dBQ3ZCLHVCQUF1QjtHQUN2QixzQkFBc0I7R0FDdEIsbUZBQW1GO0dBQ25GLHVCQUF1QjtDQUN6QjtBQUNEO0dBQ0csOEJBQXNCO1dBQXRCLHNCQUFzQjtHQUN0Qix3QkFBd0I7QUFDM0I7QUFFQztJQUNHLGFBQWE7SUFDYixrQkFBa0I7Q0FDckI7QUFFQTtJQUNHLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsYUFBYTtDQUNoQjtBQUNEO0lBQ0ksYUFBYTtDQUNoQjtBQUNBO0dBQ0UsV0FBVztHQUNYLDRDQUE0QztHQUM1QyxtQkFBbUI7R0FDbkIsaUJBQWlCO0NBQ25CO0FBQ0E7SUFDRyxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC93YXRjaGxpc3Qvd2F0Y2hsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBmb250OiAzMDBweDtcclxuICAgIGNvbG9yOiByZ2IoNTksIDU5LCA1OSk7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuLmZhdm9yaXRlLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMTU1LCAxNTUsIDE1NSwgMC4yMTkpO1xyXG59XHJcbi53YXRjaC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICBncmlkLWdhcDogMzBweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMzBweDtcclxuIH1cclxuIC5mYXZvcml0ZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgYm94LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgIHRyYW5zaXRpb246IC41cyBlYXNlLWluO1xyXG4gfVxyXG4uZmF2b3JpdGU6aG92ZXIge1xyXG4gICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbiAuZmF2b3JpdGUtYm90dG9tIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiB9XHJcblxyXG4gaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDBweCAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiB9XHJcbi5mYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuIH1cclxuIC5mYXYgc3BhbiB7XHJcbiAgIGNvbG9yOiBncmV5O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjQwLCAyNDAsIDAuOTExKTtcclxuICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiB9XHJcbiAjZmF2LXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/watchlist/watchlist.component.html":
/*!****************************************************!*\
  !*** ./src/app/watchlist/watchlist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"favorite-header\">\r\n  <h1>Watch list</h1>\r\n</div>\r\n\r\n<section class=\"watch-container\">\r\n  <div *ngFor=\"let fav of favList; index as i\">\r\n    <div class=\"favorite\">\r\n      <div class=\"favorite-top\">\r\n        <img src=\"https://image.tmdb.org/t/p/w500/{{ fav.poster_path }}\" alt=\"{{ fav.title }}\" />\r\n      </div>\r\n      <div class=\"favorite-bottom\">\r\n        <h2>{{ fav.title }}</h2>\r\n        <div class=\"fav\">\r\n            <span id=\"fav-l\">Category</span>\r\n            <span id=\"fav-r\">Year</span>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/watchlist/watchlist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/watchlist/watchlist.component.ts ***!
  \**************************************************/
/*! exports provided: WatchlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistComponent", function() { return WatchlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _apiservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apiservice.service */ "./src/app/apiservice.service.ts");




var WatchlistComponent = /** @class */ (function () {
    function WatchlistComponent(route, apiService) {
        this.route = route;
        this.apiService = apiService;
    }
    WatchlistComponent.prototype.ngOnInit = function () {
        this.favList = this.apiService.getFavList();
        console.log(this.favList);
    };
    WatchlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'watchlist',
            template: __webpack_require__(/*! ./watchlist.component.html */ "./src/app/watchlist/watchlist.component.html"),
            styles: [__webpack_require__(/*! ./watchlist.component.css */ "./src/app/watchlist/watchlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _apiservice_service__WEBPACK_IMPORTED_MODULE_3__["ApiserviceService"]])
    ], WatchlistComponent);
    return WatchlistComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Steven Ly\Downloads\angularproject - Update\angularproject\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map