import { Component, Input } from '@angular/core';
import { post } from 'src/app/services/dashboard/searchResult.type';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() post!:post
}
