import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdSidebarComponent } from './pd-sidebar.component';

describe('PdSidebarComponent', () => {
  let component: PdSidebarComponent;
  let fixture: ComponentFixture<PdSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
