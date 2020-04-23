import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
`]
})
export class UIModalContent {
  @Input() title;
  @Input() content;

  constructor(public activeModal: NgbActiveModal) {}
}
