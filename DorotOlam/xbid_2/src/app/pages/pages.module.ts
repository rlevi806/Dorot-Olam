import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { PopoverModule } from "ngx-bootstrap/popover";
import {MatStepperModule} from '@angular/material/stepper';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { IndexComponent } from "./examples/personal information/index.component";
import { ProfilepageComponent } from "./examples/life history/profilepage.component";
import { RegisterpageComponent } from "./examples/family/registerpage.component";
import { LandingpageComponent } from "./examples/legacy/landingpage.component";
import { HttpClientModule } from '@angular/common/http';
import { StudyPlaceComponent } from './components/study-place/study-place.component';
import { OccupationComponent } from './components/occupation/occupation.component';
import { RabbisComponent } from './components/rabbis/rabbis.component';
import { StudentsComponent } from './components/students/students.component';
import { WorksComponent } from './components/works/works.component';
import { MoreLinkComponent } from './components/more-link/more-link.component';
import { MoreAddressComponent } from './components/more-address/more-address.component';
import { MoreFamilyMembersComponent } from './components/more-family-members/more-family-members.component';

@NgModule({
  imports: [
    MatAutocompleteModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    MatStepperModule,
    GooglePlaceModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  declarations: [
    IndexComponent,
    ProfilepageComponent,
    RegisterpageComponent,
    LandingpageComponent,
    StudyPlaceComponent,
    OccupationComponent,
    RabbisComponent,
    StudentsComponent,
    WorksComponent,
    MoreLinkComponent,
    MoreAddressComponent,
    MoreFamilyMembersComponent,

  ],
  exports: [
    IndexComponent,
    ProfilepageComponent,
    RegisterpageComponent,
    LandingpageComponent
  ],
  providers: []
})
export class PagesModule {}
