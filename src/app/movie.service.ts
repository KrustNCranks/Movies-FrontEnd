import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  /**
   * This is used to GET all the movies
   * @param page
   */
  getMovies(page:number){
    return this.http.get(`${this.uri}/movies`);
  }

  /**
   * This is used to get one movie
   * @param id
   */
  getMoviesById(id){
    return this.http.get(`${this.uri}/movies/${id}`);
  }

  /**
   * Extra functionality, this is used to delete movies
   * @param id
   */
  deleteIssue(id){
    return this.http.get(`${this.uri}/movies/delete/${id}`);
  }
}
