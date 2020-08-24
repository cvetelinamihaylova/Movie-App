import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators'
import Movie from '../models/Movie';
import MovieDetails from '../models/Movie-Details'

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=2802740079128ef16179086164af5f36';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${BASE_URL}movie/popular${API_KEY}&page=1`)
      .pipe(
        map(data => data['results'].slice(0, 6))
      )
  }
  getInTheaterMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${BASE_URL}movie/now_playing${API_KEY}&page=1`)
      .pipe(
        map(data => data['results'].slice(0, 6))
      )
  }
  getUpcomingMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${BASE_URL}movie/upcoming${API_KEY}&page=1`)
      .pipe(
        map(data => data['results'].slice(0, 6))
      )
  }
  getTopRatedMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${BASE_URL}movie/top_rated${API_KEY}&page=1`)
      .pipe(
        map(data => data['results'].slice(0, 6))
      )
  }
  getMovieById(id: string){
    return this.http.get<MovieDetails>(`${BASE_URL}movie/${id}${API_KEY}`)
  }
  searchMovie(query: string){
    return this.http.get<Movie[]>(`${BASE_URL}search/movie${API_KEY}&query=${query}`)
  }
}
