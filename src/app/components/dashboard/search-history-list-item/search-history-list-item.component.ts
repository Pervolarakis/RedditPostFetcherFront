import { Component, Input } from '@angular/core';
import { SearchResult } from 'src/app/services/dashboard/searchResult.type';

@Component({
  selector: 'app-search-history-list-item',
  templateUrl: './search-history-list-item.component.html',
  styleUrls: ['./search-history-list-item.component.css']
})
export class SearchHistoryListItemComponent {
  @Input() searchItem!: SearchResult;
  formatDate():string{
    return new Date(this.searchItem.date).toDateString();
  }
}
