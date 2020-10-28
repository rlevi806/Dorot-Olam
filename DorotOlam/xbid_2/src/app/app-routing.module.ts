import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/examples/personal information/index.component";
import { ProfilepageComponent } from "./pages/examples/life history/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/family/registerpage.component";
import { LandingpageComponent } from "./pages/examples/legacy/landingpage.component";
import { PageComponent } from "./page/page.component";
const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "screen_1", component: PageComponent }
  //{ path: "screen_1", component: IndexComponent },
  //{ path: "screen_2", component: ProfilepageComponent },
  //{ path: "screen_3", component: RegisterpageComponent },
  //{ path: "screen_4", component: LandingpageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}