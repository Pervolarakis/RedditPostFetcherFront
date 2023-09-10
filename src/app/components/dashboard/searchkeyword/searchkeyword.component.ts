import { Component } from '@angular/core';
import { SearchkeywordService } from 'src/app/services/dashboard/searchkeyword.service';


@Component({
  selector: 'app-searchkeyword',
  templateUrl: './searchkeyword.component.html',
  styleUrls: ['./searchkeyword.component.css']
})
export class SearchkeywordComponent {
  keyword:string = "";

  constructor(private searchKeywordService: SearchkeywordService){}

  onSubmit(){
    this.searchKeywordService.searchForKeyword(this.keyword).subscribe((res)=>console.log(res))
  }
}
