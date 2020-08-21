import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators'
import Movie from '../models/Movie';
import MovieDetails from '../models/Movie-Details'

const BASE_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '?api_key=2802740079128ef16179086164af5f36';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${BASE_URL}/popular${API_KEY}&page=1`)
      .pipe(
        map(data => data['results'].slice(0, 6))
      )
  }
  getInTheaterMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${BASE_URL}/now_playing${API_KEY}&page=1`)
      .pipe(
        map(data => data['results'].slice(0, 6))
      )
  }
  getUpcomingMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${BASE_URL}/upcoming${API_KEY}&page=1`)
      .pipe(
        map(data => data['results'].slice(0, 6))
      )
  }
  getTopRatedMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${BASE_URL}/top_rated${API_KEY}&page=1`)
      .pipe(
        map(data => data['results'].slice(0, 6))
      )
  }
  getMovieById(id: string){
    return this.http.get<MovieDetails>(`${BASE_URL}/${id}${API_KEY}`)
  }
}
