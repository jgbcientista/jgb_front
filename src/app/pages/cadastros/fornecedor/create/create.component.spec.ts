import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateFornecedorComponent } from './create.component';


describe('CreateComponent', () => {

  let component: CreateFornecedorComponent;
  let fixture: ComponentFixture<CreateFornecedorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFornecedorComponent]
    });
    fixture = TestBed.createComponent(CreateFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
