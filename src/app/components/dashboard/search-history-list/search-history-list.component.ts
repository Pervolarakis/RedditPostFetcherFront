import { Component, OnInit } from '@angular/core';
import { SearchHistoryService } from 'src/app/services/dashboard/search-history/search-history.service';
import { SearchResult } from 'src/app/services/dashboard/searchResult.type';

@Component({
  selector: 'app-search-history-list',
  templateUrl: './search-history-list.component.html',
  styleUrls: ['./search-history-list.component.css']
})
export class SearchHistoryListComponent implements OnInit{

  searchHistory: {[key: string]: SearchResult} = {};
  objectKeys = Object.keys;

  constructor(private searchHistoryService: SearchHistoryService){
    this.searchHistory = searchHistoryService.searchHistory;
  }

  ngOnInit(): void {
    this.searchHistoryService.getSearchHistory().subscribe()
  }
}
