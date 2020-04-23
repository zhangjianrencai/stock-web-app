import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UIModalContent } from 'src/app/directives/modal/update-ipo-modal/update-ipo-modal.component';

@Component({
  selector: 'user-ipo-item',
  templateUrl: './ipo-item.component.html',
  styleUrls: ['./ipo-item.component.scss']
})
export class UserIpoItemComponent implements OnInit {

  @Input() item: any;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  handleEdit() {
    const modalRef = this.modalService.open(UIModalContent, { centered: true });
    modalRef.componentInstance.content = this.item;
    modalRef.componentInstance.title = "Edit IPO";
  }

  handleDelete() {
    
  }

}