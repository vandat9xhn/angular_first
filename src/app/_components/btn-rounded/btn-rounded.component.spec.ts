import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnRoundedComponent } from './btn-rounded.component';

describe('BtnRoundedComponent', () => {
  let component: BtnRoundedComponent;
  let fixture: ComponentFixture<BtnRoundedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnRoundedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnRoundedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
