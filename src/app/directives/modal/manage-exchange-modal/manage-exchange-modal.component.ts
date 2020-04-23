import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
export class MEModalContent {
  @Input() content;
  @Input() title;

  constructor(public activeModal: NgbActiveModal) {}
}
