import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WinnerYear } from './models/winner-year';

@Injectable({
  providedIn: 'root'
})
export class WinnersYearService {  
  private readonly baseURL = environment["urlAPI"];

  constructor(private httpClient: HttpClient) {
  }

  public getWinnersYear(): Observable<WinnerYear[]> {
    return this.httpClient.get<WinnerYear[]>(`${this.baseURL}?projection=years-with-multiple-winners`).pipe(
      map((res:any) => res.years)
    );
  }
}
