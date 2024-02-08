import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewPerfilComponent } from './view.component';


describe('ViewComponent', () => {
  let component: ViewPerfilComponent;
  let fixture: ComponentFixture<ViewPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPerfilComponent]
    });
    fixture = TestBed.createComponent(ViewPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
