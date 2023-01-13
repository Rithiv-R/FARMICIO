import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdhomeComponent } from './pdhome.component';

describe('PdhomeComponent', () => {
  let component: PdhomeComponent;
  let fixture: ComponentFixture<PdhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
