import { Component, Input, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { post } from 'src/app/services/dashboard/searchResult.type';
import { PostModalComponent } from '../post-modal/post-modal.component';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() post!:post

  faCaretUp = faCaretUp;
  faCaretDown = faCaretDown;
  faMessage = faMessage;

  constructor(private modalService: NgbModal){}

  openModal(){
    const modalRef = this.modalService.open(PostModalComponent);
    modalRef.componentInstance.postUrl = this.post.permalink;
  }

  formatDate():string{
      var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
      d.setUTCSeconds(this.post.created_utc);
      return d.toDateString();
  }

}
