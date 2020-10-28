import {
  Component,
  OnInit,
  Renderer2,
  HostListener,
  Inject,
  Input,
  ViewChild
} from "@angular/core";
import { Location } from "@angular/common";
import { DOCUMENT } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { profileDetails } from './models/profilepage.model';
import { ProfilepageComponent } from './pages/examples/life history/profilepage.component';
import { RegisterpageComponent } from './pages/examples/family/registerpage.component';
import { LandingpageComponent } from './pages/examples/legacy/landingpage.component';
import { root } from './models/root.model';
import { pageService } from './servises/pages.service';
import { IndexComponent } from './pages/examples/personal information/index.component';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  @ViewChild(ProfilepageComponent) profilepageComponent:ProfilepageComponent;
  @ViewChild(RegisterpageComponent) registerpageComponent:RegisterpageComponent;
  @ViewChild(LandingpageComponent) landingpageComponent:LandingpageComponent;
  @ViewChild(IndexComponent)indexComponent:IndexComponent;
root:root;
  constructor(
    private renderer: Renderer2,
    public location: Location,
    @Inject(DOCUMENT) document,
    private _formBuilder: FormBuilder,
    private service:pageService
  ) { }
  keep() {
   this.root=new root(this.profilepageComponent.profile,this.registerpageComponent.register
    ,this.landingpageComponent.landing,this.indexComponent.index);
    console.log(this.root);
    this.service.save(this.root).subscribe(x=>alert("success"));

  }

  ngOnInit() {
  }
  change(val: any) {
    if (val == 1) {
      document.getElementById('cdk-step-label-0-0').style.backgroundColor = 'red';
    }
    else if (val == 2) {
      document.getElementById('cdk-step-label-0-1').style.backgroundColor = 'red';
    }
    else if (val == 3) {
      document.getElementById('cdk-step-label-0-2').style.backgroundColor = 'red';
    }
    else {
      document.getElementById('cdk-step-label-0-3').style.backgroundColor = 'red';
    }
  }
}
