import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarServicoComponent } from '../../servico/list/list.component';

describe('ListarServicoComponent', () => {
  let component: ListarServicoComponent;
  let fixture: ComponentFixture<ListarServicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarServicoComponent]
    });
    fixture = TestBed.createComponent(ListarServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
