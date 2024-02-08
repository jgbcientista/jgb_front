import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateServicoComponent } from './create.component';


describe('CreateComponent', () => {

  let component: CreateServicoComponent;
  let fixture: ComponentFixture<CreateServicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateServicoComponent]
    });
    fixture = TestBed.createComponent(CreateServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
