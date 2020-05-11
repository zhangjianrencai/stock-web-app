import { Component, OnInit } from '@angular/core';
import { IDModalContent } from 'src/app/directives/modal/import-data-modal/import-data-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var $ : any;

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.scss']
})
export class ImportDataComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { 
   
  }

  ngOnInit() {
    let service = this.modalService;
    $("#input-id").fileinput({
        uploadUrl: "/api/upload",
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
  }

  handleClick() {
  }

}
