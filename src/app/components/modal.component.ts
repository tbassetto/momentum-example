import { ModalRef } from '@momentum-ui/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'modal-example',
  template: `
    <md-modal
      htmlId="modal1"
      aria-label="modal1"
    >
      <md-modal-header
        headerLabel="Default Modal">
      </md-modal-header>
      <md-modal-body>
        <form></form>
      </md-modal-body>
      <md-modal-footer>
        <button md-button
          alt="Close Modal"
          type="button"
          aria-label="Close Modal"
          (click)="close()"
        > Cancel
        </button>
        <button md-button
          color="blue"
          alt="Submit Form"
          type="submit"
          aria-label="Submit Form"
        >
          OK
        </button>
      </md-modal-footer>
    </md-modal>
  `
})
export class AppModalComponent {
  sampleData;
  constructor(private modalRef: ModalRef) {
    this.sampleData = this.modalRef.data;
  }

  close() {
    this.modalRef.close(this.sampleData);
  }

}
