import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { StudyPlace } from 'src/app/models/study-place';


@Component({
  selector: 'app-study-place',
  templateUrl: './study-place.component.html',
  styleUrls: ['./study-place.component.scss']
})
export class StudyPlaceComponent implements OnInit {
  @Input('study-place') studyPlace:StudyPlace=new StudyPlace();
  @Output('studyBlur') studtyBlur:EventEmitter<StudyPlace> = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  nameBlur(name){
    this.studyPlace.name=name.value;
    this.studtyBlur.emit(this.studyPlace);
  }
  addressBlur(address){
    this.studyPlace.address=address.value;
    this.studtyBlur.emit(this.studyPlace);
  }

}
