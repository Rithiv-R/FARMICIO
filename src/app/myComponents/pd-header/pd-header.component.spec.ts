import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdHeaderComponent } from './pd-header.component';

describe('PdHeaderComponent', () => {
  let component: PdHeaderComponent;
  let fixture: ComponentFixture<PdHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
