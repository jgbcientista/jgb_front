import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewProdutoComponent } from './view.component';


describe('ViewComponent', () => {
  let component: ViewProdutoComponent;
  let fixture: ComponentFixture<ViewProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProdutoComponent]
    });
    fixture = TestBed.createComponent(ViewProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
