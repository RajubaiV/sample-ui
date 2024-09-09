import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcegatelistComponent } from './icegatelist.component';

describe('IcegatelistComponent', () => {
  let component: IcegatelistComponent;
  let fixture: ComponentFixture<IcegatelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcegatelistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcegatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
