import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProdutoComponent } from './list.component';

describe('ListarPessoaComponent', () => {
  let component: ListarProdutoComponent;
  let fixture: ComponentFixture<ListarProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarProdutoComponent]
    });
    fixture = TestBed.createComponent(ListarProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
