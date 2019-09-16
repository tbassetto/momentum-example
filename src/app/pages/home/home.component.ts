import { Component, OnInit } from '@angular/core';
import { ModalService } from '@momentum-ui/angular';
import { TestmodalComponent } from 'src/app/testmodal/testmodal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private modal: ModalService) { }

  openModal1() {
    const modalRef = this.modal.open({
      content: TestmodalComponent,
      data: {
        sampleData: [23, 34, 45, 56]
      },
    });
    modalRef.onHide$.subscribe( ex => {
      /* do the stuff to process here */
      /* ex is the data */
    });
  }

}
