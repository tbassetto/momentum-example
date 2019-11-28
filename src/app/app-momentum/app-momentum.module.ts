import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SideBarModule,
  SideBarBodyModule,
  SidebarNavModule,
  SidebarNavItemModule,
  SidebarHeaderModule,
  SidebarFooterModule,
  ButtonModule,
  IconModule,
  ListModule,
  ListItemModule,
  TopbarModule,
  TooltipModule,
  DrawerModule,
  ModalModule
} from '@momentum-ui/angular';
import { ModalWithFormComponent } from '../pages/drawers-page/modal-with-form/modal-with-form.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SideBarModule,
    SideBarBodyModule,
    SidebarNavModule,
    SidebarNavItemModule,
    SidebarHeaderModule,
    SidebarFooterModule,
    ButtonModule,
    IconModule,
    ListModule,
    ListItemModule,
    TopbarModule,
    TooltipModule,
    DrawerModule,
    ModalModule
  ],
  exports: [
    SideBarModule,
    SideBarBodyModule,
    SidebarNavModule,
    SidebarNavItemModule,
    SidebarHeaderModule,
    SidebarFooterModule,
    ButtonModule,
    IconModule,
    ListModule,
    ListItemModule,
    TopbarModule,
    TooltipModule,
    DrawerModule,
    ModalModule
  ],
  entryComponents: [ModalWithFormComponent]
})
export class AppMomentumModule { }
