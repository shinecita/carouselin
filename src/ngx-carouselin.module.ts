import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCarouselinComponent } from './ngx-carouselin/ngx-carouselin.component';
import { NgxCarouselinItemComponent } from './ngx-carouselin-item/ngx-carouselin-item.component';


@NgModule({
  imports: [CommonModule],
  exports: [
    NgxCarouselinComponent,
    NgxCarouselinItemComponent
  ],
  declarations: [
    NgxCarouselinComponent,
    NgxCarouselinItemComponent
  ],
  providers: [
  ],
})

export class NgxCarouselinModule { }