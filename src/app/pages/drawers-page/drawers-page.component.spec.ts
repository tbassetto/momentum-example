import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawersPageComponent } from './drawers-page.component';

describe('DrawersPageComponent', () => {
  let component: DrawersPageComponent;
  let fixture: ComponentFixture<DrawersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
