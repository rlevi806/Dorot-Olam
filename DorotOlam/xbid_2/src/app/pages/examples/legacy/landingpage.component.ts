import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, AbstractControl, FormControl, Validators } from '@angular/forms';
import * as $ from "jquery";
import { root } from 'src/app/models/root.model';
import { pageService } from 'src/app/servises/pages.service';
import { landingDetails, occupation, rabbis, Student, Work, MoreLink } from 'src/app/models/landingpage.model';
import { StudyPlace } from 'src/app/models/study-place';

@Component({
  selector: "app-landingpage",
  templateUrl: "landingpage.component.html"
})
export class LandingpageComponent implements OnInit {
    hhhh: root;
    landing: landingDetails = new landingDetails();
  landingForm: FormGroup;
  formattedaddress: any;
  studyPlaces:StudyPlace[]=[];
  occupations:occupation[]=[];
  rabbis:rabbis[]=[];
  students:Student[]=[];
  works:Work[]=[];
  moreLinks:MoreLink[]=[];
  options = {
    types: [],
    componentRestrictions: [{ country: 'IL' }, { country: 'EU' }]
  };
  affiliation = new FormControl('', [
    Validators.required
  ])
  template = new FormControl('', [
    Validators.required
  ])
  studyPlace: FormArray;
  occupation: FormArray;
  rabbi: FormArray;
  student: FormArray;
  work: FormArray;
  moreLink: FormArray;
  constructor(private formBuilder: FormBuilder, private service:pageService) {
  }

  ngOnInit() {
    this.landing.studyPlace=this.studyPlaces
    this.landing.occupation=this.occupations
    this.landing.rabbis=this.rabbis
    this.landing.students=this.students
    this.landing.works=this.works
    this.landing.moreLink=this.moreLinks;
    this.landingForm = this.formBuilder.group({
      affiliation: this.affiliation,
      template: this.template,
    });
  }
  studyBlur(studyPlace:StudyPlace,index:number){
    this.studyPlace=studyPlace[index];
  }
  occupationBlur(occupation:occupation,index:number){
    this.occupation=occupation[index];
  }
  rabbiBlur(rabbi:rabbis,index:number){
    this.rabbi=rabbi[index];
  }
 studentBlur(student:Student,index:number){
    this.student=student[index];
  }
  workBlur(work:Work,index:number){
    this.work=work[index];
  }
  moreLinkBlur(moreLink:MoreLink,index:number){
    this.moreLink=moreLink[index];
  }

  addStudyPlace() {
    this.studyPlaces.push(new StudyPlace());
    console.log(this.studyPlaces);
  }
  addOccupation() {
    this.occupations.push(new occupation());
    console.log(this.occupations);
    
  }
  addRabbis() {
    this.rabbis.push(new rabbis());
    console.log(this.rabbis);
  }
  addStudents() {
    this.students.push(new Student());
    console.log(this.students);
  }
  addWorks() {
    this.works.push(new Work());
    console.log(this.works);
  }
  addMoreLink() {
    this.moreLinks.push(new MoreLink());
    console.log(this.moreLinks);
  }
  removeStudyPlace(i: number)
   { this.studyPlaces.splice(i,1); }
  removeOccupation(i: number) {
    this.occupations.splice(i,1);
  } removeRabbis(i: number) {
    this.rabbis.splice(i,1);
  } removeStudents(i: number) {
    this.students.splice(i,1);
  } removeWorks(i: number) {
    this.works.splice(i,1);
  } removeMoreLink(i: number) {
    this.moreLinks.splice(i,1);
  }
  public handleAddressChangeOfStudyPlace(address: any,index:number){
    this.landingForm.controls.studyPlace.value[index].address=address.formatted_address;
    
  }
  
  public handleAddressChangeOfOccupation(address: any,index:number){
    this.landingForm.controls.occupation.value[index].address=address.formatted_address;
    
  }
  public handleAddressChangeOfRabbis(address: any,index:number){
    this.landingForm.controls.rabbis.value[index].address=address.formatted_address;
    
  }
  public handleAddressChangeOfStudents(address: any,index:number){
    this.landingForm.controls.students.value[index].address=address.formatted_address;
    
  }

  
  onsubmit() {
    console.log(this.landing)
  }
}
