import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-display-search-result',
  templateUrl: './display-search-result.component.html',
  styleUrls: ['./display-search-result.component.css']
})
export class DisplaySearchResultComponent implements OnInit {

  id!: string
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id')!
    })
  }
}
