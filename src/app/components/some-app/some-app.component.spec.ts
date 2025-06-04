import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeAppComponent } from './some-app.component';

describe('SomeAppComponent', () => {
  let component: SomeAppComponent;
  let fixture: ComponentFixture<SomeAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomeAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
