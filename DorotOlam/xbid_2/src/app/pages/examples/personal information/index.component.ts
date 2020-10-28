import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IndexDetails } from 'src/app/models/index.model';
import { pageService } from 'src/app/servises/pages.service';
@Component({
  selector: "app-index",
  templateUrl: "index.component.html"
})
export class IndexComponent implements OnInit {
  profileForm: FormGroup
    readonly maxSize = 104857600;
    index: IndexDetails = new IndexDetails();

  id = new FormControl('', [
    Validators.required
  ]);
  firstName = new FormControl('', [
    Validators.required
  ]);
  lastName = new FormControl('', [
    Validators.required
  ]);
  previousFamilyName = new FormControl('');
  gender = new FormControl('', [
    Validators.required
  ]);
  attribution = new FormControl('', [
    Validators.required
  ]);
  degree = new FormControl('');

    constructor(public pageService: pageService,
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) {

  }
  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      previousFamilyName: this.previousFamilyName,
      gender: this.gender,
      attribution: this.attribution,
      degree: this.degree,
      picture: [
        undefined, [Validators.required]
      ],
      situationPicture: [
        undefined, [Validators.required]
      ]
    });
  }
  handleFileInput(files: any, key: string) {

    let reader = new FileReader();

    if(files && files.length) {
      const [file] = files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.profileForm.patchValue({
          [key]: reader.result
        });
        this.cd.markForCheck();
      };
    }
  }
  onSubmit() {
    console.log(this.index)
  }
    sendDetaiels() {
        this.pageService.sendDetailes().subscribe((res) => {

            console.log("sucsseful");

        }, (err) => {
            console.log(err);
        });

    }
}
