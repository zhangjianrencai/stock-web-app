import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'me-modal-content',
  templateUrl: './manage-exchange-modal.html',
  styles: [`
  label {
    width: 30%;
    font-weight: 500;
  }
  input, textarea{
    width: 70%;
  }
`]
})
export class MEModalContent implements OnInit{
  @Input() content;
  @Input() title;

  isAddFunction=false;

  constructor(public activeModal: NgbActiveModal,
    private businessService: BusinessService
    ) {

    }
  ngOnInit(): void {
    this.isAddFunction = ('Add Exchange' === this.title) ? true : false;
  }

  handleSave() {
    let exchange = {
      stockExchange: this.content.stockExchange,
      brief: this.content.brief,
      contactAddress: this.content.contactAddress,
      remarks: this.content.remarks
    }
    if (this.isAddFunction) {
      this.businessService.addExchange(exchange).subscribe(
        data => {
          console.log('add new exchange');
        }, error => {
  
        }
      );
    } else {
      this.businessService.updateExchange(this.content.id, exchange).subscribe(
        data => {
          console.log('update new exchange');
        }, error => {
  
        }
      );
    }
  }
}
