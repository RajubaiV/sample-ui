import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcegateFormComponent } from './icegate-form.component';

describe('IcegateFormComponent', () => {
  let component: IcegateFormComponent;
  let fixture: ComponentFixture<IcegateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcegateFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcegateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
