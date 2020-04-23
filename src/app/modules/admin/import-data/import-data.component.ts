import { Component, OnInit, OnChanges, AfterViewChecked } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.scss']
})
export class ImportDataComponent implements OnInit, AfterViewChecked {

  constructor() { 
   
  }

  ngOnInit() {
    $("#input-id").fileinput(
      {
        'showPreview': false,
        'showCancel': false
      }
    );
  }

  ngOnChanges() {
    
  }

  ngAfterViewChecked() {
    
  }

}
