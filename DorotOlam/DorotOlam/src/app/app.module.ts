import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DisplayRecordComponent } from './memorial/components/display-record/display-record.component';
import { BuildingComponent } from './components/building/building.component';
import { MemorialModule } from './memorial/memorial.module';

@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MemorialModule,
    RouterModule.forRoot([
      { path: 'displayDetails/:id', component: DisplayRecordComponent },
      { path: '', component: BuildingComponent }

  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
