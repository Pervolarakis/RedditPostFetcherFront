import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchHistoryResponse } from '../searchResult.type';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {
  
  private apiUrl:string = "http://localhost:4000/api/v1/queries";

  constructor(private http: HttpClient) { }

  getSearchHistory(): Observable<SearchHistoryResponse>{
    return this.http.get<SearchHistoryResponse>(this.apiUrl,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('current-user')}`
      })
    })
  }

}
