import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhachhangdamuaComponent } from './khachhangdamua.component';

describe('KhachhangdamuaComponent', () => {
  let component: KhachhangdamuaComponent;
  let fixture: ComponentFixture<KhachhangdamuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhachhangdamuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhachhangdamuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
