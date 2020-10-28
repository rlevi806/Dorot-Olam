import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { registerDetails, MoreFamilyMember } from 'src/app/models/registerpage.model';

@Component({
    selector: "app-registerpage",
    templateUrl: "registerpage.component.html"
})
export class RegisterpageComponent implements OnInit {
    register: registerDetails = new registerDetails();
    registerForm: FormGroup;
    moreFamilyMembers: MoreFamilyMember[] = [];
    index: number;
    fatherFirstName = new FormControl('', [
        Validators.required
    ]);
    fatherLastName = new FormControl('', [
        Validators.required
    ])
    fatherId = new FormControl('', [
        Validators.required
    ])
    fatherOrigin = new FormControl('', [
        Validators.required
    ])
    motherOrigin = new FormControl('', [
        Validators.required
    ])
    motherFirstName = new FormControl('', [
        Validators.required
    ])
    motherLastName = new FormControl('', [
        Validators.required
    ])
    motherId = new FormControl('', [
        Validators.required
    ])
    partnerFirstName = new FormControl('', [
        Validators.required
    ])
    partnerLastName = new FormControl('', [
        Validators.required
    ])
    partnerOrigin = new FormControl('', [
        Validators.required
    ])
    partnerId = new FormControl('', [
        Validators.required
    ])
    name = new FormControl('', [
        Validators.required
    ])
    closeness = new FormControl('', [
        Validators.required
    ])

    moreFamilyMember: FormArray;
    formattedaddress: any;
    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.register.moreFamilyMembers = this.moreFamilyMembers
        this.registerForm = this.formBuilder.group({
            fatherFirstName: this.fatherFirstName,
            motherId: this.motherId,
            motherFirstName: this.motherFirstName,
            motherLastName: this.motherLastName,
            motherOrigin: this.motherOrigin,
            fatherId: this.fatherId,
            fatherOrigin: this.fatherOrigin,
            partnerLastName: this.partnerLastName,
            partnerFirstName: this.partnerFirstName,
            partnerId: this.partnerId,
            partnerOrigin: this.partnerOrigin,
            fatherLastName: this.fatherLastName,
        });
    }
    moreFamilyMemberBlur(moreFamilyMember: MoreFamilyMember, index: number) {
        this.moreFamilyMember = moreFamilyMember[index];
    }
    addItem(): void {
        this.moreFamilyMembers.push(new MoreFamilyMember())
        console.log(this.moreFamilyMembers);

    }
    removeItem(i: number) {
        this.moreFamilyMembers.splice(i, 1);
    }
    onSubmit() {
        console.log(this.registerForm.value);
    }
    public handleAddressChange(address: any) {
        this.formattedaddress = address.formatted_address;
    }
}
