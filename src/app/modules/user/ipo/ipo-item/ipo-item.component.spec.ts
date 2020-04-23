import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IpoItemComponent } from './ipo-item.component';


describe('IpoItemComponent', () => {
  let component: IpoItemComponent;
  let fixture: ComponentFixture<IpoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
