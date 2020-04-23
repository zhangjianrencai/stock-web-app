import { Component, OnInit } from '@angular/core';
import { MCModalContent } from 'src/app/directives/modal/manage-company-modal/manage-company-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manage-company',
  templateUrl: './manage-company.component.html',
  styleUrls: ['./manage-company.component.scss']
})
export class ManageCompanyComponent implements OnInit {

  itemList : Array<any>;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.itemList = [
      { 
        companyName: 'Google',
        trunover: '10000',
        ceo: 'Jian Zhang',
        director: 'Jian Zhang',
        stockExchange: 'BSE,BNSE',
        sector: 'Technical',
        brief: 'Google is a big technology company'
      },
      { 
        companyName: 'Google',
        trunover: '10000',
        ceo: 'Jian Zhang',
        director: 'Jian Zhang',
        stockExchange: 'BSE,BNSE',
        sector: 'Technical',
        brief: 'Google is a big technology company'
      },
      { 
        companyName: 'Google',
        trunover: '10000',
        ceo: 'Jian Zhang',
        director: 'Jian Zhang',
        stockExchange: 'BSE,BNSE',
        sector: 'Technical',
        brief: 'Google is a big technology company'
      },
      { 
        companyName: 'Google',
        trunover: '10000',
        ceo: 'Jian Zhang',
        director: 'Jian Zhang',
        stockExchange: 'BSE,BNSE',
        sector: 'Technical',
        brief: 'Google is a big technology company'
      }
    ];
  }

  open() {
    const modalRef = this.modalService.open(MCModalContent, { centered: true });
    modalRef.componentInstance.content =  { 
      companyName: '',
      trunover: '',
      ceo: '',
      director: '',
      stockExchange: '',
      sector: '',
      brief: ''
    };
    modalRef.componentInstance.title = "Add Company";
  }

}
