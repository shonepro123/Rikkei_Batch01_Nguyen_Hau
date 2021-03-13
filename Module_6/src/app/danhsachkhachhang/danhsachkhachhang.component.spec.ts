import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachkhachhangComponent } from './danhsachkhachhang.component';

describe('DanhsachkhachhangComponent', () => {
  let component: DanhsachkhachhangComponent;
  let fixture: ComponentFixture<DanhsachkhachhangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhsachkhachhangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachkhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
