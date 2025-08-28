import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private apiUrl = 'https://api.giphy.com/v1/gifs';
  constructor(private http: HttpClient) {}



  fetchTrending(limit = 100) {
    return this.http.get(`${this.apiUrl}/trending`, {
      params: {
        api_key: '6n1HqLxJphd8L4FlWQhgGp5LVJj91O8y',
        limit: limit.toString(),
      },
    });
  }

  searchGifs(query: string, limit = 100) {
    return this.http.get(`${this.apiUrl}/search`, {
      params: {
        api_key: '6n1HqLxJphd8L4FlWQhgGp5LVJj91O8y',
        q: query,
        limit: limit.toString(),
      },
    });
  }
}
