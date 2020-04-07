import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCompnentComponent } from './login-compnent.component';

describe('LoginCompnentComponent', () => {
  let component: LoginCompnentComponent;
  let fixture: ComponentFixture<LoginCompnentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCompnentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
