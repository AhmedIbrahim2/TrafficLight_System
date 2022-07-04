import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formn2wayComponent } from './formn2way.component';

describe('Formn2wayComponent', () => {
  let component: Formn2wayComponent;
  let fixture: ComponentFixture<Formn2wayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formn2wayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formn2wayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
