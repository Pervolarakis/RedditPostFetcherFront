import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SearchHistoryService } from 'src/app/services/dashboard/search-history/search-history.service';
import { SearchResult } from 'src/app/services/dashboard/searchResult.type';

@Component({
  selector: 'app-display-search-result',
  templateUrl: './display-search-result.component.html',
  styleUrls: ['./display-search-result.component.css']
})
export class DisplaySearchResultComponent implements OnInit {

  id!: string
  searchItem!: SearchResult;

  constructor(private route: ActivatedRoute, private searchHistoryService: SearchHistoryService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')!
      //todo: check if this.searchHistoryService.searchHistory exists or fetch item
      this.searchItem = this.searchHistoryService.searchHistory[this.id]
    })
    if(Object.keys(this.searchHistoryService.searchHistory).length===0){
      this.searchHistoryService.getSearchHistory().subscribe((res)=>{
        this.searchItem = this.searchHistoryService.searchHistory[this.id]
      });
    }
  }

  calculateTotalUpvotes(){
    return this.searchItem.posts.reduce((accumulator, object) => {
      return accumulator + object.ups;
    }, 0);
  }

  calculateTotalDownvotes(){
    return this.searchItem.posts.reduce((accumulator, object) => {
      return accumulator + object.downs;
    }, 0);
  }

  calculateTotalCommentss(){
    return this.searchItem.posts.reduce((accumulator, object) => {
      return accumulator + object.num_comments;
    }, 0);
  }

  formatDate():string{
    return new Date(this.searchItem.date).toDateString();
}

}
