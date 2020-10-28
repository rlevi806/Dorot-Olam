import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoreAddress } from 'src/app/models/profilepage.model';

@Component({
  selector: 'app-more-address',
  templateUrl: './more-address.component.html',
  styleUrls: ['./more-address.component.scss']
})
export class MoreAddressComponent implements OnInit {
  @Input('moreAddress') moreAddress:MoreAddress=new MoreAddress();
  @Output('moreAddressBlur') moreAddressBlur:EventEmitter<MoreAddress> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  nameBlur(name){
    this.moreAddress.name=name.value;
    this.moreAddressBlur.emit(this.moreAddress);
  }
}
