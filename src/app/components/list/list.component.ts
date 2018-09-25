import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MovieService} from "../../movie.service";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material";

import { Movie } from "../../movie.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  private page: number=1;
  private movie2:Array<any>;
  private pages:Array<number>;
  movies: Movie[];
  displayedItems = ['title', 'release_date', 'poster_path'];
  constructor(private movieService : MovieService, private router: Router) { }

  /**
   * This is supposed to take the pagination numbers and reload the rest of the movies in the next page
   * however, all movies were loaded at once due to issues with this bit
   * @param i
   * @param event
   */
  setPage(i,event:any){
    event.prevendDefault();
    this.page = i;
    this.showAllMovies();
  }

  ngOnInit() {
    this.showAllMovies();
  }

  /**
   * This gets all the movies from the backend
   */
  showAllMovies(){
    this.movieService.getMovies(this.page).subscribe((data: Movie[])=>{
      this.movies = data;
      console.log("Data has been requested from the backend");
      console.log(this.movies);
      this.pages = new Array(data['totalPages']);
    })
  }


  /**
   * In order to add extra functionality
   * @param id
   */
  chooseMovie(id){
    this.router.navigate([`/edit/${id}`]);
  }

}
