import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreatePatrimonioComponent } from './create.component';


describe('CreateComponent', () => {

  let component: CreatePatrimonioComponent;
  let fixture: ComponentFixture<CreatePatrimonioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePatrimonioComponent]
    });
    fixture = TestBed.createComponent(CreatePatrimonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
