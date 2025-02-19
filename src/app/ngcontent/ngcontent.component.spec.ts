import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontentComponent } from './ngcontent.component';

describe('NgcontentComponent', () => {
  let component: NgcontentComponent;
  let fixture: ComponentFixture<NgcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgcontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
