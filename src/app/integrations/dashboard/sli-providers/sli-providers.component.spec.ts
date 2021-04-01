import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliProvidersComponent } from './sli-providers.component';

describe('SliProvidersComponent', () => {
  let component: SliProvidersComponent;
  let fixture: ComponentFixture<SliProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliProvidersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
