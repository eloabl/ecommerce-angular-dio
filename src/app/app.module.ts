import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FiltersComponent } from './components/book-cart/filters/filters.component';
import { ProductListComponent } from './components/book-cart/product-list/product-list.component';
import { BookCartComponent } from './components/book-cart/book-cart.component';
import { ProductItemComponent } from './components/book-cart/product-list/product-item/product-item.component';
import { BookService } from './components/book-cart/product-list/product-list.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    FiltersComponent,
    ProductListComponent,
    BookCartComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})

export class AppModule { }
