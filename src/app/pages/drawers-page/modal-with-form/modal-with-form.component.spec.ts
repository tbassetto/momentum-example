import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWithFormComponent } from './modal-with-form.component';

describe('ModalWithFormComponent', () => {
  let component: ModalWithFormComponent;
  let fixture: ComponentFixture<ModalWithFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWithFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWithFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
