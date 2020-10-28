import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoreFamilyMember } from 'src/app/models/registerpage.model';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-more-family-members',
  templateUrl: './more-family-members.component.html',
  styleUrls: ['./more-family-members.component.scss']
})
export class MoreFamilyMembersComponent implements OnInit {
  @Input('moreFamilyMember') moreFamilyMember:MoreFamilyMember=new MoreFamilyMember();
  @Output('moreFamilyMemberBlur') moreFamilyMemberBlur:EventEmitter<MoreFamilyMember> = new EventEmitter();
  filteredOptions: Observable<string[]>;
  options: string[] = [
    "אח", "אחות", "אחיין", "אחיינית"
    , "בן", "בת", "בן דוד", "בת דודה", "נכד", "נכדה", "סבא", "סבתא"
  ]
  closeness=new FormControl();
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.closeness.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  firstNameBlur(firstName){
    this.moreFamilyMember.firstName=firstName.value;
    this.moreFamilyMemberBlur.emit(this.moreFamilyMember);
  } 
  lastNameBlur(lastName){
    this.moreFamilyMember.lastName=lastName.value;
    this.moreFamilyMemberBlur.emit(this.moreFamilyMember);
  }
  originBlur(origin){
    this.moreFamilyMember.origin=origin.value;
    this.moreFamilyMemberBlur.emit(this.moreFamilyMember);
  } 
  idBlur(id){
    this.moreFamilyMember.id=id.value;
    this.moreFamilyMemberBlur.emit(this.moreFamilyMember);
  }
  closenessBlur(closeness){
    this.moreFamilyMember.closeness=closeness.value;
    this.moreFamilyMemberBlur.emit(this.moreFamilyMember);
  } 

}
