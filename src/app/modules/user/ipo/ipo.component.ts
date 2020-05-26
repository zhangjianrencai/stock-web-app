import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UIModalContent } from 'src/app/directives/modal/update-ipo-modal/update-ipo-modal.component';
import { BusinessService } from 'src/app/services/business.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.scss']
})
export class IPOComponent implements OnInit {

  itemList: any;

  constructor(private modalService: NgbModal,
    private businessService: BusinessService) { }

  ngOnInit() {
    this.itemList = [
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
      
    ]

    let fetchIPOItemList = this.businessService.fetchIPOItemList();
    let fetch
    forkJoin
    this.businessService.fetchIPOItemList().subscribe(
      data => {
        this.itemList = data;
      }, error => {
        console.log('error');
      }
    );
  }
}
