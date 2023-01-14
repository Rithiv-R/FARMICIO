import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdAidebarComponent } from './pd-aidebar.component';

describe('PdAidebarComponent', () => {
  let component: PdAidebarComponent;
  let fixture: ComponentFixture<PdAidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdAidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdAidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
