import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UIModalContent } from 'src/app/directives/modal/update-ipo-modal/update-ipo-modal.component';
import { BusinessService } from 'src/app/services/business.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-update-ipo',
  templateUrl: './update-ipo.component.html',
  styleUrls: ['./update-ipo.component.scss']
})
export class UpdateIPOComponent implements OnInit {

  itemList: any;

  constructor(private modalService: NgbModal,
    private businessService: BusinessService) { }

  ngOnInit() {
    // let ipoList = this.businessService.fetchIPOList();
    // let companyList = this.businessService.fetchCompanyList();
    // let sectorList = this.businessService.fetchExchangeList();
    // forkJoin().subscribe();
    this.businessService.fetchIPOList().subscribe(
      data => {
        this.itemList = data;
        console.log(data);
      }
    );
    /* this.itemList = [
      { 
        companyName: 'Google',
        stockExchange: '10000',
        share: '10',
        numberShare: '100',
        openDatetime: '2019/07/07',
        remarks: 'Google is a big technology company'
      },
      { 
        companyName: 'Google',
        stockExchange: '10000',
        share: '10',
        numberShare: '100',
        openDatetime: '2019/07/07',
        remarks: 'Google is a big technology company'
      }
      
    ] */
  }

  open() {
    const modalRef = this.modalService.open(UIModalContent, { centered: true });
    modalRef.componentInstance.content = {};
    modalRef.componentInstance.title = "Add IPO";
  }
}
