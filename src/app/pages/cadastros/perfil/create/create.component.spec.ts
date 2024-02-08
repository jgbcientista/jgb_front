import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePerfilComponent } from './create.component';


describe('CreateComponent', () => {

  let component: CreatePerfilComponent;
  let fixture: ComponentFixture<CreatePerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePerfilComponent]
    });
    fixture = TestBed.createComponent(CreatePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
