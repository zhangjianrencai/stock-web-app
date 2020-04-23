import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

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

  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings={} as IDropdownSettings;

  constructor(public activeModal: NgbActiveModal) {

  }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

}
