import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MCModalContent } from 'src/app/directives/modal/manage-company-modal/manage-company-modal.component';

@Component({
  selector: 'company-item',
  templateUrl: './company-item.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./company-item.component.scss']
})
export class CompanyItemComponent implements OnInit {

  @Input() item: any;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  handleEdit() {
    const modalRef = this.modalService.open(MCModalContent, { centered: true });
    modalRef.componentInstance.content = this.item;
    modalRef.componentInstance.title = "Edit Company";
  }

  handleDelete() {

  }

}