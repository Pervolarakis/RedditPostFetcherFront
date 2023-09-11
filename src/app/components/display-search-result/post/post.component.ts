import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { post } from 'src/app/services/dashboard/searchResult.type';
import { PostModalComponent } from '../post-modal/post-modal.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() post!:post
  @ViewChild(PostModalComponent) modal!:PostModalComponent;

  constructor(private modalService: NgbModal){}

  openModal(){
    const modalRef = this.modalService.open(PostModalComponent);
    modalRef.componentInstance.postUrl = this.post.permalink;
  }

}
