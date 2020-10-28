import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Work } from 'src/app/models/landingpage.model';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  @Input('work') work:Work=new Work();
  @Output('workBlur') workBlur:EventEmitter<Work> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  nameBlur(name){
    this.work.name=name.value;
    this.workBlur.emit(this.work);
  }
  descriptionBlur(description){
    this.work.description=description.value;
    this.workBlur.emit(this.work);
  } 
  linkBlur(link){
    this.work.link=link.value;
    this.workBlur.emit(this.work);
  }
}
