import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClienteComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditClienteComponent;
  let fixture: ComponentFixture<EditClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditClienteComponent]
    });
    fixture = TestBed.createComponent(EditClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
