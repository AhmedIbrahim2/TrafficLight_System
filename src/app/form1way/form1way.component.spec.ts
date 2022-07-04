import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form1wayComponent } from './form1way.component';

describe('Form1wayComponent', () => {
  let component: Form1wayComponent;
  let fixture: ComponentFixture<Form1wayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form1wayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form1wayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
