import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { occupation } from 'src/app/models/landingpage.model';

@Component({
  selector: 'app-occupation',
  templateUrl: './occupation.component.html',
  styleUrls: ['./occupation.component.scss']
})
export class OccupationComponent implements OnInit {
  @Input('occupation') occupation:occupation=new occupation();
  @Output('occupationBlur') occupationBlur:EventEmitter<occupation> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  addressBlur(address){
    this.occupation.address=address.value;
    this.occupationBlur.emit(this.occupation);
  }
  nameInstitutionBlur(nameInstitution){
    this.occupation.nameInstitution=nameInstitution.value;
    this.occupationBlur.emit(this.occupation);
  }
  roleBlur(role){
    this.occupation.role=role.value;
    this.occupationBlur.emit(this.occupation);
  }
}
