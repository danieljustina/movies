import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IntervalProducer } from './models/interval-producer';

@Injectable({
  providedIn: 'root'
})
export class IntervalProducerService {

  private readonly baseURL = environment["urlAPI"];

  constructor(private httpClient: HttpClient ) {
  }

  public getIntervalProducers(): Observable<IntervalProducer> {
    return this.httpClient.get<IntervalProducer>(`${this.baseURL}?projection=max-min-win-interval-for-producers`);
  }
}
