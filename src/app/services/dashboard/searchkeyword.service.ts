import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResult } from './searchResult.type';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SearchkeywordService {

  constructor(private http: HttpClient) { }

  private apiUrl:string = 'http://localhost:4000/api/v1/posts?keyword='

  searchForKeyword(keyword: String): Observable<SearchResult>{
    return this.http.get<SearchResult>(`${this.apiUrl}${keyword}`,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('current-user')}`
      })
    })
  }


}
