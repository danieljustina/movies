import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Studio } from './models/studio';

@Injectable({
  providedIn: 'root'
})
export class TopStudiosService {

  private readonly baseURL = environment["urlAPI"];

  constructor(private _httpClient: HttpClient ) {
  }

  public getStudios(): Observable<Studio[]> {
    return this._httpClient.get<Studio[]>(`${this.baseURL}?projection=studios-with-win-count`).pipe(
      map((res:any) => res.studios)
    );
  }
}
