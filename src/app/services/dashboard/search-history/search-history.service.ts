import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, mergeMap } from 'rxjs';
import { SearchHistoryResponse, SearchResult } from '../searchResult.type';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {
  
  private apiUrl:string = "http://localhost:4000/api/v1/queries";
  searchHistory: {[key: string]: SearchResult} = {};
  constructor(private http: HttpClient) { }

  getSearchHistory(): Observable<void>{
    return this.http.get<SearchHistoryResponse>(this.apiUrl,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('current-user')}`
      })
    }).pipe(
      map((res: SearchHistoryResponse) => {
        res.data.map((el, index)=>{
          this.searchHistory[el._id] = el;
        })
        console.log(this.searchHistory)
      })
    );
  }

}
