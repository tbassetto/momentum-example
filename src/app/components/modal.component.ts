import { ModalRef } from '@momentum-ui/angular';
import { Component } from '@angular/core';


@Component({
  selector: 'app-modal',
  template: `
    <md-modal
      htmlId="modal1"
      aria-label="modal1"
    >
      <md-modal-header
        headerLabel="Default Modal">
      </md-modal-header>
      <md-modal-body>
        <form #form="ngForm" (ngSubmit)="save(form.value)" >
        <md-input
        [(ngModel)]="this.sampleData.value"
        inputSize="small-5"
        label="Enter hex color value"
        name="name"
      >
      </md-input>
        </form>
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
          (click)="form.ngSubmit.emit()"
        >
          OK
        </button>
      </md-modal-footer>
    </md-modal>
  `
})
export class AppModalComponent {
  sampleData;
  submitted = false;
  constructor(private modalRef: ModalRef) {
    this.sampleData = this.modalRef.data;

  }

  public close() {
    if (this.submitted) {
      this.modalRef.data = this.sampleData;
    }
    this.modalRef.close(this.sampleData);
  }

  public save() {
    this.submitted = true;
    this.close();
  }

}
