import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayRecordComponent } from './components/display-record/display-record.component';
import {HttpClientModule  } from "@angular/common/http";


@NgModule({
  declarations: [DisplayRecordComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class MemorialModule { }
