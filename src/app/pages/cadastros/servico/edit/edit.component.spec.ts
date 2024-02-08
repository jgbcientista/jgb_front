import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServicoComponent } from './edit.component';

describe('EditComponent', () => {
  let component: EditServicoComponent;
  let fixture: ComponentFixture<EditServicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditServicoComponent]
    });
    fixture = TestBed.createComponent(EditServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
