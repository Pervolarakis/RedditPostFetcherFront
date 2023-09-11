import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewSearchResonse, SearchResult } from './searchResult.type';

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

  searchForKeyword(keyword: String): Observable<NewSearchResonse>{
    return this.http.get<NewSearchResonse>(`${this.apiUrl}${keyword}`,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('current-user')}`
      })
    })
  }


}
