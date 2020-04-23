import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MEModalContent } from 'src/app/directives/modal/manage-exchange-modal/manage-exchange-modal.component';

@Component({
  selector: 'app-manage-exchange',
  templateUrl: './manage-exchange.component.html',
  styleUrls: ['./manage-exchange.component.scss']
})
export class ManageExchangeComponent implements OnInit {

  itemList: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.itemList = [
      { 
        stockExchange: 'BSE',
        brief: 'new yourk',
        contactAddress: 'USA',
        remarks: 'test data'
      },
      { 
        stockExchange: 'BSE',
        brief: 'new yourk',
        contactAddress: 'USA',
        remarks: 'test data'
      }
    ]
  }

  open() {
    const modalRef = this.modalService.open(MEModalContent, { centered: true });
    modalRef.componentInstance.content = {};
    modalRef.componentInstance.title = "Add Exchange";
  }

}
