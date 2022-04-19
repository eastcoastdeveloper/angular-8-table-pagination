import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxPaginationModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
