import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePessoaComponent } from './create.component';


describe('CreateComponent', () => {

  let component: CreatePessoaComponent;
  let fixture: ComponentFixture<CreatePessoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePessoaComponent]
    });
    fixture = TestBed.createComponent(CreatePessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
