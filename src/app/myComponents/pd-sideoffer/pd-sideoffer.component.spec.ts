import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdSideofferComponent } from './pd-sideoffer.component';

describe('PdSideofferComponent', () => {
  let component: PdSideofferComponent;
  let fixture: ComponentFixture<PdSideofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdSideofferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdSideofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
