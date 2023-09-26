import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePasswordInputComponent } from './change-password-input.component';

describe('ChangePasswordInputComponent', () => {
  let component: ChangePasswordInputComponent;
  let fixture: ComponentFixture<ChangePasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePasswordInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
