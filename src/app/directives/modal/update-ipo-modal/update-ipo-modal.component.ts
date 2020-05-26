import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BusinessService } from 'src/app/services/business.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Globals } from 'src/app/common';

@Component({
  selector: 'ui-modal-content',
  templateUrl: './update-ipo-modal.html',
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
export class UIModalContent implements OnInit{
  @Input() title;
  @Input() content;

  isAddFunction = false;
  companyDropdownList = [];
  exchangeDropdownList = [];
  companySelectedItems = [];
  exchangeSelectedItems = [];
  dropdownSettings: IDropdownSettings={} as IDropdownSettings;

  constructor(public activeModal: NgbActiveModal,
      private businessService: BusinessService,
      private globals: Globals
    ) { 

  }

  ngOnInit() {
    this.initialSingleList();
    this.isAddFunction = ('Add IPO' === this.title) ? true : false;
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    if (this.content.dateTime && this.content.dateTime.length > 10)
      this.content.dateTime = this.content.dateTime.substring(0, 10);
  }

  private initialSingleList() {
    this.companyDropdownList = [];
    this.globals.companyList.forEach(element => {
      this.companyDropdownList.push({
        item_id: element.id,
        item_text: element.companyName
      });
    });
    this.exchangeDropdownList = [];
    this.globals.exchangeList.forEach(element => {
      this.exchangeDropdownList.push({
        item_id: element.id,
        item_text: element.stockExchange
      });
    });

    if (this.isAddFunction) {
      //this.companySelectedItems = [{}];
      //this.exchangeSelectedItems = [{}];
    } else {
      this.companySelectedItems = [{
        item_id: this.content.companyId,
        item_text: this.content.companyName
      }];
      this.exchangeSelectedItems = [{
        item_id: this.content.exchangeId,
        item_text: this.content.stockExchange
      }];
    }
  }

  handleSave() {
    let IPO = {
      companyId: this.companySelectedItems[0].item_id,
      companyName: this.companySelectedItems[0].item_text,
      exchangeId: this.exchangeSelectedItems[0].item_id,
      stockExchange: this.exchangeSelectedItems[0].item_text,
      price: this.content.price,
      shares: this.content.shares,
      remarks: this.content.remarks,
      dateTime: this.content.dateTime
    }
    if (this.isAddFunction) {
      this.businessService.addIPO(IPO).subscribe(
        data => {
          console.log('add new IPO');
        }, error => {

        }
      );
    } else {
      this.businessService.updateIPO(this.content.id, IPO).subscribe(
        data => {
          console.log('update new IPO');
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
