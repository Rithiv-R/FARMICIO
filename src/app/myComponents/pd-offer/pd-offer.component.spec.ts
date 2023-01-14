import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdOfferComponent } from './pd-offer.component';

describe('PdOfferComponent', () => {
  let component: PdOfferComponent;
  let fixture: ComponentFixture<PdOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
