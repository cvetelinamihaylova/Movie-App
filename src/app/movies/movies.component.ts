import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/Movie';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularMovies: Array<Movie>;
  inTheaterMovies: Array<Movie>;

  message = null;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(data=>{
      this.popularMovies = data['results'].slice(0, 6);
    });

    this.movieService.getInTheaterMovies().subscribe(data=>{
      this.inTheaterMovies = data['results'].slice(0, 6);

    })
  }

  fromChild(event){
    this.message = event;
  }

}
