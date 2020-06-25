import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TableModule } from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NewsComponent } from './news/news.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { ProductService } from './service/product.service';
import {TabMenuModule} from 'primeng/tabmenu';
import { HeaderComponent } from './header/header.component';
import {DialogModule} from 'primeng/dialog';


@NgModule({
declarations: [
AppComponent,
NewsComponent,
AnnouncementComponent,
HeaderComponent
],
imports: [
BrowserModule,
BrowserAnimationsModule,
AppRoutingModule,
HttpClientModule,
TableModule,
TabMenuModule,
DialogModule
],
providers: [ProductService],
bootstrap: [AppComponent]
})
export class AppModule { }
