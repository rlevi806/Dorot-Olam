import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule,ReactiveFormsModule  } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { PagesModule } from "./pages/pages.module";
import {MatStepperModule} from '@angular/material/stepper';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


import { ProfilepageComponent } from "./pages/examples/life history/profilepage.component";
import { HttpModule } from '@angular/http';
import { PageComponent } from './page/page.component';
@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    // ProfilepageComponent,
    // RegisterpageComponent,
    // LandingpageComponent
  ],
  imports: [
   
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    GooglePlaceModule,
    PagesModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    PagesModule,
    RouterModule.forRoot([
        { path: 'displayDetails/:id', component: PageComponent },
        { path: '', component: ProfilepageComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
