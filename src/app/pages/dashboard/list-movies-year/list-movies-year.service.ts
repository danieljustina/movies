import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MoviesYear } from './models/movies-year';

@Injectable({
  providedIn: 'root'
})
export class ListMoviesYearService {

  private readonly baseURL = environment["urlAPI"];

  constructor(private _httpClient: HttpClient ) {
  }

  public getMovieWinner(year: number): Observable<MoviesYear[]> {
    return this._httpClient.get<MoviesYear[]>(`${this.baseURL}?winner=true&year=${year}`);
  }

}
