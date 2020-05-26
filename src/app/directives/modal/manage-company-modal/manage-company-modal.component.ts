import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'mc-modal-content',
  templateUrl: './manage-company-modal.html',
  styles: [`
    label {
      width: 30%;
      font-weight: 500;
    }
    input, textarea{
      width: 70%;
    }
    .pillsInput {
      display: inline-block;
      width: 70%;
    }
  `]
})
export class MCModalContent implements OnInit{
  @Input() title;
  @Input() content;

  isAddFunction　= false;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings={} as IDropdownSettings;

  constructor(public activeModal: NgbActiveModal,
    private businessService: BusinessService) {

  }

  ngOnInit() {
    this.isAddFunction = ('Add Company' === this.title) ? true : false;

  }

  handleSave() {
    let company = {
      stockExchange: this.content.stockExchange,
      brief: this.content.brief,
      contactAddress: this.content.contactAddress,
      remarks: this.content.remarks
    }
    if (this.isAddFunction) {
      this.businessService.addCompany(company).subscribe(
        data => {
          console.log('add new company');
        }, error => {
  
        }
      );
    } else {
      this.businessService.updateCompany(this.content.id, company).subscribe(
        data => {
          console.log('update new company');
        }, error => {
  
        }
      );
    }
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
