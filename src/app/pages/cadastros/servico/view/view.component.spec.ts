import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewServicoComponent } from './view.component';


describe('ViewComponent', () => {
  let component: ViewServicoComponent;
  let fixture: ComponentFixture<ViewServicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewServicoComponent]
    });
    fixture = TestBed.createComponent(ViewServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
