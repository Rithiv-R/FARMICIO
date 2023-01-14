import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdItemcardComponent } from './pd-itemcard.component';

describe('PdItemcardComponent', () => {
  let component: PdItemcardComponent;
  let fixture: ComponentFixture<PdItemcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdItemcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdItemcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
