import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewPostComponent } from './view.component';


describe('ViewComponent', () => {
  let component: ViewPostComponent;
  let fixture: ComponentFixture<ViewPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPostComponent]
    });
    fixture = TestBed.createComponent(ViewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
