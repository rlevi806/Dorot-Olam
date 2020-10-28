import { Component, OnInit, Input} from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators,FormArray } from '@angular/forms';
import * as $ from "jquery";
import { profileDetails, MoreAddress } from 'src/app/models/profilepage.model';
import { pageService } from 'src/app/servises/pages.service';

@Component({
  selector: "app-profilepage",
  templateUrl: "profilepage.component.html"
})
export class ProfilepageComponent implements OnInit  {
    @Input() profile1: profileDetails;
   num:number=8;
  isCollapsed = true;
  formattedaddress : any;
    lifeForm: FormGroup;
    profile: profileDetails = new profileDetails();
  moreAddresses:MoreAddress[]=[];
  options={
    types: [],
    componentRestrictions: [{ country: 'IL' },{country: 'EU'}]
    };
    birthDate = new FormControl('',[
      Validators.required
    ])
    birthplace = new FormControl('',[
      Validators.required
    ])
    deathdate = new FormControl('',[
      Validators.required
    ])
    deathage = new FormControl('',[
      Validators.required
    ])
    deathplace = new FormControl('',[
      Validators.required
    ])
    burialplace = new FormControl('',[
      Validators.required
    ])
    lifehistory = new FormControl('',[
      Validators.required
    ])
    residence= new FormControl('',[
      Validators.required
    ])
    tags = new FormControl('',[
      Validators.required
    ])
  constructor(private formBuilder: FormBuilder,private servise:pageService
    ) {}
    val:any;
    moreAddress:FormArray;
  ngOnInit() {
    this.profile.moreAddress=this.moreAddresses;
    console.log(",,,",this.num);
    
    this.lifeForm = this.formBuilder.group({
      birthDate: this.birthDate,
      birthplace: this.birthplace,
      deathdate: this.deathdate,
      deathage: this.deathage,
      deathplace: this.deathplace,
      burialplace: this.burialplace,
      lifehistory: this.lifehistory,
      residence : this.residence,
      tags:this.tags,
     
    });
    
  }
  moreAddressBlur(moreAddress:MoreAddress,index:number){
    this.moreAddress=moreAddress[index];
  }
  addItem(): void {
this.moreAddresses.push(new MoreAddress())
console.log(this.moreAddresses);

  }
  removeItem( i: number){
     this.moreAddresses.splice(i,1);
  }
  public handleAddressChange(address :  any){
    this.formattedaddress = address.formatted_address;
  }
  public handleAddressChangeOfMoreAddress(address: any,index:number){
    this.lifeForm.controls.moreAdress.value[index].name=address.formatted_address;
  //  this.profile.moreAddress[index]=this.moreAddress[index]
  }
  onSubmit(){
    // console.log(this.lifeForm.value);
    console.log(this.profile);
    
  }
  
}
