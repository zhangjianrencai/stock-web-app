import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'id-modal-content',
  templateUrl: './import-data-modal.html',
  styles: [`
  label {
    width: 30%;
    font-weight: 500;
  }
`]
})
export class IDModalContent {
  @Input() title;
  @Input() content;

  constructor(public activeModal: NgbActiveModal) {}
}
