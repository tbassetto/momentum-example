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
  ModalModule,
  BadgeModule,
  PopoverModule,
  TooltipComponent,
  TooltipModule

} from '@momentum-ui/angular';

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
    ModalModule,
    BadgeModule,
    PopoverModule,
    TooltipModule
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
    ModalModule,
    BadgeModule,
    PopoverModule,
    TooltipModule
  ],
  entryComponents: [TooltipComponent]
})
export class AppMomentumModule { }
