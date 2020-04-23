import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MEModalContent } from 'src/app/directives/modal/manage-exchange-modal/manage-exchange-modal.component';

@Component({
  selector: 'exchange-item',
  templateUrl: './exchange-item.component.html',
  styleUrls: ['./exchange-item.component.scss']
})
export class ExchangeItemComponent implements OnInit {

  @Input() item: any;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }


  handleEdit() {
    const modalRef = this.modalService.open(MEModalContent, { centered: true });
    modalRef.componentInstance.content = this.item;
    modalRef.componentInstance.title = "Edit Company";
  }

  handleDelete() {
    
  }
}