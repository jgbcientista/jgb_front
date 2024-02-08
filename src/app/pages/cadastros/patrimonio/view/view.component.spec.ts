import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewPatrimonioComponent } from './view.component';


describe('ViewComponent', () => {
  let component: ViewPatrimonioComponent;
  let fixture: ComponentFixture<ViewPatrimonioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPatrimonioComponent]
    });
    fixture = TestBed.createComponent(ViewPatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
