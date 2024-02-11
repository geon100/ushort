import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenerComponent } from './shortener.component';

describe('ShortenerComponent', () => {
  let component: ShortenerComponent;
  let fixture: ComponentFixture<ShortenerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortenerComponent]
    });
    fixture = TestBed.createComponent(ShortenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
