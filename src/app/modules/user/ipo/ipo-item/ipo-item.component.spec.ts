import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserIpoItemComponent } from './ipo-item.component';


describe('UserIpoItemComponent', () => {
  let component: UserIpoItemComponent;
  let fixture: ComponentFixture<UserIpoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIpoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserIpoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
