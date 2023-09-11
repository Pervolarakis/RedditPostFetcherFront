import { Component } from '@angular/core';
import { SearchHistoryService } from 'src/app/services/dashboard/search-history/search-history.service';
import { NewSearchResonse } from 'src/app/services/dashboard/searchResult.type';
import { SearchkeywordService } from 'src/app/services/dashboard/searchkeyword.service';


@Component({
  selector: 'app-searchkeyword',
  templateUrl: './searchkeyword.component.html',
  styleUrls: ['./searchkeyword.component.css']
})
export class SearchkeywordComponent {
  keyword:string = "";

  constructor(private searchKeywordService: SearchkeywordService, private searchHistoryService: SearchHistoryService){}

  onSubmit(){
    this.searchKeywordService.searchForKeyword(this.keyword).subscribe((res: NewSearchResonse)=>this.searchHistoryService.searchHistory[res.data._id] = res.data);
  }
}
