import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvellousLabelComponent } from './marvellous-label.component';

describe('MarvellousLabelComponent', () => {
  let component: MarvellousLabelComponent;
  let fixture: ComponentFixture<MarvellousLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarvellousLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarvellousLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
