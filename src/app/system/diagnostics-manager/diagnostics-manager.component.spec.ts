import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticsManagerComponent } from './diagnostics-manager.component';

describe('DiagnosticsManagerComponent', () => {
  let component: DiagnosticsManagerComponent;
  let fixture: ComponentFixture<DiagnosticsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
