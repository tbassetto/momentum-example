import { Component } from '@angular/core';

@Component({
  selector: 'app-drawers-page',
  templateUrl: './drawers-page.component.html',
  styleUrls: ['./drawers-page.component.scss']
})
export class DrawersPageComponent {
  public showDrawer = false;

  toggleDrawer() {
    this.showDrawer = !this.showDrawer;
  }

  changeDrawer(event) {
    // Never called?
    console.warn('changeDrawer', event);
  }
}
