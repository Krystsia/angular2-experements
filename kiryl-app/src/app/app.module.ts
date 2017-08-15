import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderCopyComponent } from './header-copy/header-copy.component';
import { MenuComponent } from './menu/menu.component';
import { OneService } from './menu/one.service';
import { SecondService } from './menu/two.service';
import { ModalComponent } from './modal/modal.component';
import { CustomTagDirective } from './custom-tag.direcitve';
import { InnerComponent } from './inner/inner.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderCopyComponent,
    MenuComponent,
    ModalComponent,
    CustomTagDirective,
    InnerComponent,
    SimpleFormComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CustomTagDirective,
  ],
  providers: [OneService, SecondService, FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule { }
