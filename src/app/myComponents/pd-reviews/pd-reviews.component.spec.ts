import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdReviewsComponent } from './pd-reviews.component';

describe('PdReviewsComponent', () => {
  let component: PdReviewsComponent;
  let fixture: ComponentFixture<PdReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
