import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getCurrency(from: string, to: string[]) {
    const headers= new HttpHeaders()
    .set('apikey', 'pX25jiLABrSQyGp9eKqr2sjMFmJLB9zo')
    const toStr = to.join(',');
    return this.http.get(`https://api.apilayer.com/currency_data/live?source=${from}&currencies=${toStr}`, { 'headers': headers });
  }

}
