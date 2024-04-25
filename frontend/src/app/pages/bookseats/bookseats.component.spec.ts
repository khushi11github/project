import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookseatsComponent } from './bookseats.component';

describe('BookseatsComponent', () => {
  let component: BookseatsComponent;
  let fixture: ComponentFixture<BookseatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookseatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookseatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
