import { Component } from '@angular/core';
import { ModalRef } from '@momentum-ui/angular';

@Component({
  selector: 'app-testmodal',
  templateUrl: './testmodal.component.html',
  styleUrls: ['./testmodal.component.scss']
})
export class TestmodalComponent  {
  sampleData;
  constructor(private modalRef: ModalRef) {
    this.sampleData = this.modalRef.data;
  }

  close() {
    this.modalRef.close(this.sampleData);
  }


}
