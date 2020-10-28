import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoToServerService } from 'app/memorial/services/goToServer/go-to-server.service';
import { Record } from '../../models/record/record';

@Component({
  selector: 'app-display-record',
  templateUrl: './display-record.component.html',
  styleUrls: ['./display-record.component.css']
})
export class DisplayRecordComponent implements OnInit {
  record:Record;

  constructor(public goToServerService:GoToServerService,public activatedRoute: ActivatedRoute) { 

  }

  ngOnInit() {
    this.goToServerService.getRecordById(this.activatedRoute.snapshot.paramMap.get('id'))
    .subscribe((res: Record) => {
        this.record = res;
        console.log(this.record);
    },
        err =>
            console.log(err)
    );
    
  }

}
