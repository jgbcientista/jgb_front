import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateFuncaoComponent } from './create.component';


describe('CreateComponent', () => {

  let component: CreateFuncaoComponent;
  let fixture: ComponentFixture<CreateFuncaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFuncaoComponent]
    });
    fixture = TestBed.createComponent(CreateFuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
