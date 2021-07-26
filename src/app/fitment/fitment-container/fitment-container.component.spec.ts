import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitmentContainerComponent } from './fitment-container.component';

describe('FitmentContainerComponent', () => {
  let component: FitmentContainerComponent;
  let fixture: ComponentFixture<FitmentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitmentContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitmentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
