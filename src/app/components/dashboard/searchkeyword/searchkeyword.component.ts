import { Component } from '@angular/core';

@Component({
  selector: 'app-searchkeyword',
  templateUrl: './searchkeyword.component.html',
  styleUrls: ['./searchkeyword.component.css']
})
export class SearchkeywordComponent {
  keyword:string = "";

  onSubmit(){
    console.log(this.keyword)
  }
}
