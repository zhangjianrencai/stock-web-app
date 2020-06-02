import { Component, OnInit } from '@angular/core';
import { IDModalContent } from 'src/app/directives/modal/import-data-modal/import-data-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { APIS, Globals } from 'src/app/common';
import { BusinessService } from 'src/app/services/business.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';
declare var $ : any;

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.scss']
})
export class ImportDataComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private businessService: BusinessService,
    private router: Router,
    private globals: Globals
  ) { 
   
  }

  ngOnInit() {
    let service = this.modalService;
    $("#input-id").fileinput({
        uploadUrl: APIS.STOCK_SERVICE_UPLOAD + 'upload',
        uploadAsync: true,  //异步上传
        showPreview: false,
        showCancel: false
      }).on('fileuploaded', function(event, previewId, index, fileId) {
        const modalRef = service.open(IDModalContent, { centered: true });
        modalRef.componentInstance.title = "Summary of Upload";
        console.log('upload');
    }).on('fileuploaderror', function(event, data, msg) {
      
    }).on('filebatchuploadcomplete', function(event, preview, config, tags, extraData) {
      const modalRef = service.open(IDModalContent, { centered: true });
      modalRef.componentInstance.title = "Summary of Upload";
      console.log('upload done');
    });
    let companyList = this.businessService.fetchCompanyList();
    let exchangeList = this.businessService.fetchExchangeList();
    forkJoin(companyList, exchangeList).subscribe(
      data => {
        this.globals.companyList = data[0];
        this.globals.exchangeList = data[1];
      }, error=> {
        this.router.navigate(['signin']);
      }
    );
  }

  handleClick() {
  }

}
