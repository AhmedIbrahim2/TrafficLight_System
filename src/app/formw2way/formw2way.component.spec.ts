import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formw2wayComponent } from './formw2way.component';

describe('Formw2wayComponent', () => {
  let component: Formw2wayComponent;
  let fixture: ComponentFixture<Formw2wayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formw2wayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Formw2wayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
