import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateClienteComponent } from './create.component';


describe('CreateComponent', () => {

  let component: CreateClienteComponent;
  let fixture: ComponentFixture<CreateClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateClienteComponent]
    });
    fixture = TestBed.createComponent(CreateClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
