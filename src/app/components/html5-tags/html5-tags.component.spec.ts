import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5TagsComponent } from './html5-tags.component';

describe('Html5TagsComponent', () => {
  let component: Html5TagsComponent;
  let fixture: ComponentFixture<Html5TagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Html5TagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5TagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
