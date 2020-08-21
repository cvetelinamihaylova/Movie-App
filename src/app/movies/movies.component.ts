import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../services/movie.service';
import Movie from '../models/Movie';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  popularMovies: Movie[];
  inTheaterMovies: Movie[];
  upcomingMovies: Movie[];
  topRatedMovies: Movie[];

  popularMoviesSub: Subscription;
  inTheaterMoviesSub: Subscription;
  upcomingMoviesSub: Subscription;
  topRatedMoviesSub: Subscription;


  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.popularMoviesSub = this.movieService.getPopularMovies().subscribe(data=>{
      this.popularMovies = data;
    });

    this.inTheaterMoviesSub = this.movieService.getInTheaterMovies().subscribe(data=>{
      this.inTheaterMovies = data;
    });
    this.upcomingMoviesSub = this.movieService.getUpcomingMovies().subscribe(data=>{
      this.upcomingMovies = data;
    });
    this.topRatedMoviesSub = this.movieService.getTopRatedMovies().subscribe(data=>{
      this.topRatedMovies = data;
    });
  }

  ngOnDestroy(){
    console.log('hello')
    this.popularMoviesSub.unsubscribe();
    this.inTheaterMoviesSub.unsubscribe();
    this.upcomingMoviesSub.unsubscribe();
    this.topRatedMoviesSub.unsubscribe();
  }
}
