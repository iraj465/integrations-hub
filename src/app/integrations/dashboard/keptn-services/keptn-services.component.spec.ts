import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeptnServicesComponent } from './keptn-services.component';

describe('KeptnServicesComponent', () => {
  let component: KeptnServicesComponent;
  let fixture: ComponentFixture<KeptnServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeptnServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeptnServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
