import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forms2wayComponent } from './forms2way.component';

describe('Forms2wayComponent', () => {
  let component: Forms2wayComponent;
  let fixture: ComponentFixture<Forms2wayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forms2wayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Forms2wayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
