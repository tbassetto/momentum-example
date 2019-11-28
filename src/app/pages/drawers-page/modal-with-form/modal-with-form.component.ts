import { Component } from "@angular/core";
import { ModalRef } from "@momentum-ui/angular";

@Component({
  selector: "app-modal-with-form",
  templateUrl: "./modal-with-form.component.html",
  styleUrls: ["./modal-with-form.component.scss"]
})
export class ModalWithFormComponent {
  sampleData;

  constructor(private modalRef: ModalRef) {
    this.sampleData = this.modalRef.data;
  }

  close() {
    this.modalRef.close(this.sampleData);
  }
}
