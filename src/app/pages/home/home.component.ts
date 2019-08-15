import { Component, OnInit } from '@angular/core';
import { ModalService } from '@momentum-ui/angular';
import { AppModalComponent } from 'src/app/components/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dataModel = 'Test';
  constructor(private modal: ModalService) { }

  ngOnInit() {
  }

  openModal() {
    const modalRef = this.modal.open({
      content: AppModalComponent,
      data: {
        value: this.dataModel
      },
      backdrop: true
    });
    modalRef.onHide$.subscribe( ex => {
      this.dataModel = ex.data.value;
     console.log(this.dataModel);
    });
  }

}
