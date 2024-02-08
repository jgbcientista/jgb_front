import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewFornecedorComponent } from './view.component';


describe('ViewComponent', () => {
  let component: ViewFornecedorComponent;
  let fixture: ComponentFixture<ViewFornecedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewFornecedorComponent]
    });
    fixture = TestBed.createComponent(ViewFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
