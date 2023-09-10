import { Component, OnInit } from '@angular/core';
import { SearchHistoryService } from 'src/app/services/dashboard/search-history/search-history.service';
import { SearchHistoryResponse, SearchResult } from 'src/app/services/dashboard/searchResult.type';

@Component({
  selector: 'app-search-history-list',
  templateUrl: './search-history-list.component.html',
  styleUrls: ['./search-history-list.component.css']
})
export class SearchHistoryListComponent implements OnInit{

  searchHistory: SearchResult[] = [];

  constructor(private searchHistoryService: SearchHistoryService){}

  ngOnInit(): void {
    this.searchHistoryService.getSearchHistory().subscribe((res: SearchHistoryResponse)=>{
      this.searchHistory = res.data;
      console.log(this.searchHistory)
    })
  }
}
