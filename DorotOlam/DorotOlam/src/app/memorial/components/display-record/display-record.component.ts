import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoToServerService } from 'app/memorial/services/goToServer/go-to-server.service';
import { Record } from '../../models/record/record';
import { Utils } from '../../models/utils/utils';
import { LifeStory } from '../../models/lifeStory/life-story';
import { Family } from '../../models/family/family';
import { Legacy } from '../../models/legacy/legacy';
import { PersonalInformation } from '../../models/personalInformation/personal-information';

@Component({
  selector: 'app-display-record',
  templateUrl: './display-record.component.html',
  styleUrls: ['./display-record.component.css']
})
export class DisplayRecordComponent implements OnInit {
  record: Record = new Record();

  

  constructor(public goToServerService: GoToServerService, public activatedRoute: ActivatedRoute) {

    this.record.personalInformation = new PersonalInformation();
    this.record.lifeStory = new LifeStory();
    this.record.family = new Family();
    this.record.legacy = new Legacy();

    this.goToServerService.getRecordById(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe((res: Record) => {
        this.record = res;
        console.log(this.record);
      },
        err =>
          console.log(err)
      );
  }

  ngOnInit() {
    //this.goToServerService.getRecordById(this.activatedRoute.snapshot.paramMap.get('id'))
    //.subscribe((res: Record) => {
    //    this.record = res;
    //    console.log(this.record);
    //},
    //    err =>
    //        console.log(err)
    //);
    
  }

  hasValue(val): boolean {
    return Utils.hasValue(val);
  }

}
