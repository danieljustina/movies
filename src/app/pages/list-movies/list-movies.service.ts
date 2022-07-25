import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from './models/movie';

@Injectable({
  providedIn: 'root'
})
export class ListMoviesService {

  private readonly baseURL = environment["urlAPI"];

  constructor(private _httpClient: HttpClient) {
  }

  public getWinnersYear(page: number, size: number, winner?: boolean, year?: number ): Observable<Movie[]> {
    let queryParam = `page=${page}&size=${size}`;
    queryParam += winner != undefined ? `&winner=${winner}` : '';
    queryParam += year ? `&year=${year}` : '';

    return this._httpClient.get<Movie[]>(`${this.baseURL}?${queryParam}`);
  }
}
