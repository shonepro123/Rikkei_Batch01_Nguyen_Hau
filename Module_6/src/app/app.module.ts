import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { ThemkhachhangComponent } from './themkhachhang/themkhachhang.component';
import { DanhsachkhachhangComponent } from './danhsachkhachhang/danhsachkhachhang.component';
import { KhachhangdamuaComponent } from './khachhangdamua/khachhangdamua.component';
import { ThemnhanvienComponent } from './themnhanvien/themnhanvien.component';
import { DanhsachnhanvienComponent } from './danhsachnhanvien/danhsachnhanvien.component';
import { ThemsanphamComponent } from './themsanpham/themsanpham.component';
import { DanhsachsanphamComponent } from './danhsachsanpham/danhsachsanpham.component';


@NgModule({
  declarations: [
    AppComponent,
    ThemkhachhangComponent,
    DanhsachkhachhangComponent,
    KhachhangdamuaComponent,
    ThemnhanvienComponent,
    DanhsachnhanvienComponent,
    ThemsanphamComponent,
    DanhsachsanphamComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'khachhang', component: ThemkhachhangComponent},
      { path: 'nhanvien', component: DanhsachkhachhangComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
