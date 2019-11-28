import { Component } from '@angular/core';
import { ModalService } from '@momentum-ui/angular';
import { ModalWithFormComponent } from './modal-with-form/modal-with-form.component';

@Component({
  selector: 'app-drawers-page',
  templateUrl: './drawers-page.component.html',
  styleUrls: ['./drawers-page.component.scss']
})
export class DrawersPageComponent {
  public showDrawer = false;

  constructor(private modal: ModalService) {}

  toggleDrawer() {
    this.showDrawer = !this.showDrawer;
  }

  changeDrawer(event) {
    // Never called?
    console.warn('changeDrawer', event);
  }

  openModal() {
    const modalRef = this.modal.open({
      content: ModalWithFormComponent,
      data: {
        sampleData: [12, 99, 34, 5]
      },
    });
    modalRef.onHide$.subscribe(ex => {
      console.warn('modal returned', ex);
    });
  }
}
