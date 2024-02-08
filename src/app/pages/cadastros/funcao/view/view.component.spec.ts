import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewFuncaoComponent } from './view.component';


describe('ViewComponent', () => {
  let component: ViewFuncaoComponent;
  let fixture: ComponentFixture<ViewFuncaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFuncaoComponent]
    });
    fixture = TestBed.createComponent(ViewFuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
