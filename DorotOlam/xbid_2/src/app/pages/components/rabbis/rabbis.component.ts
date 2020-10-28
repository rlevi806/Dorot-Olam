import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { rabbis } from 'src/app/models/landingpage.model';

@Component({
  selector: 'app-rabbis',
  templateUrl: './rabbis.component.html',
  styleUrls: ['./rabbis.component.scss']
})
export class RabbisComponent implements OnInit {
  @Input('rabbi') rabbi:rabbis=new rabbis();
  @Output('rabbiBlur') rabbiBlur:EventEmitter<rabbis> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  addressBlur(address){
    this.rabbi.address=address.value;
    this.rabbiBlur.emit(this.rabbi);
  }
  nameBlur(name){
    this.rabbi.name=name.value;
    this.rabbiBlur.emit(this.rabbi);
  }
  roleBlur(role){
    this.rabbi.role=role.value;
    this.rabbiBlur.emit(this.rabbi);
  }
 

}
