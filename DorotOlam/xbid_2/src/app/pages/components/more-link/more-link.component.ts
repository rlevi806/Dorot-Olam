import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoreLink } from 'src/app/models/landingpage.model';

@Component({
  selector: 'app-more-link',
  templateUrl: './more-link.component.html',
  styleUrls: ['./more-link.component.scss']
})
export class MoreLinkComponent implements OnInit {
  @Input('moreLink') moreLink:MoreLink=new MoreLink();
  @Output('moreLinkBlur') moreLinkBlur:EventEmitter<MoreLink> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  descriptionBlur(description){
    this.moreLink.description=description.value;
    this.moreLinkBlur.emit(this.moreLink);
  } 
  linkBlur(link){
    this.moreLink.link=link.value;
    this.moreLinkBlur.emit(this.moreLink);
  }
}
