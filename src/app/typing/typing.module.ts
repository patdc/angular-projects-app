import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypingRoutingModule } from './typing-routing.module';
import { TypingComponent } from './typing/typing.component';


@NgModule({
  declarations: [
    TypingComponent
  ],
  imports: [
    CommonModule,
    TypingRoutingModule
  ],
  exports: [TypingComponent]
})
export class TypingModule { }
