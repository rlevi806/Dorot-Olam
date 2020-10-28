import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/models/landingpage.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  @Input('student') student:Student=new Student();
  @Output('studentBlur') studentBlur:EventEmitter<Student> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  addressBlur(address){
    this.student.address=address.value;
    this.studentBlur.emit(this.student);
  }
  nameBlur(name){
    this.student.name=name.value;
    this.studentBlur.emit(this.student);
  }
  roleBlur(role){
    this.student.role=role.value;
    this.studentBlur.emit(this.student);
  }
 

}
