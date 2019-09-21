import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {
  CustomDialogComponent
} from './custom-dialog/custom-dialog.component';
import {
  ConfirmDialogComponent
} from './modals/confirm-dialog/confirm-dialog.component';
import {
  InputDialogComponent
} from './modals/input-dialog/input-dialog.component';
import {
  MessageDialogComponent
} from './modals/message-dialog/message-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    InputDialogComponent,
    MessageDialogComponent,
    CustomDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  entryComponents: [
    ConfirmDialogComponent,
    InputDialogComponent,
    MessageDialogComponent,
    CustomDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
