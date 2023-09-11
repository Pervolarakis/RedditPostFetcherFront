import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})


export class PostModalComponent implements OnInit{
  
  @Input() postUrl!:string;
  current_url!: SafeUrl;

  constructor(private sanitizer: DomSanitizer) {
  }

	ngOnInit(): void {
		this.current_url=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.redditmedia.com" + this.postUrl + "?ref_source=embed&amp;ref=share&amp;embed=true")
	}

}
