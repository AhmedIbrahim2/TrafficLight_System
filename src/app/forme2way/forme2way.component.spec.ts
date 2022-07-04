import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Forme2wayComponent } from './forme2way.component';

describe('Forme2wayComponent', () => {
  let component: Forme2wayComponent;
  let fixture: ComponentFixture<Forme2wayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Forme2wayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Forme2wayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
