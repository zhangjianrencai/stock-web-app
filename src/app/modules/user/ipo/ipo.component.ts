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
    let fetchIPOItemList = this.businessService.fetchUserIPOItemList();
    let fetchCompanyList = this.businessService.fetchCompanyList();
    forkJoin(fetchCompanyList, fetchIPOItemList).subscribe(
      data => {
        data[0].forEach(ele => {
          let stockInfo = data[1].filter(item => item[1] === ele.stockCode);
          ele['stockPrice'] = stockInfo[0][2];
        });
      this.itemList = data[0];
      console.log(this.itemList);
      }, error => {
        console.log('get api error');
      }
    );
  }
}
