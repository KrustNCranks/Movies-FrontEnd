import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from "@angular/router";

import { MovieService} from "../../movie.service";
import {Movie} from "../../movie.model";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  movie: any = {};
  constructor(private movieService: MovieService,private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.id = params.id;
      this.movieService.getMoviesById(this.id).subscribe(res=>{
        this.movie = res;
      })
    })
  }

}
