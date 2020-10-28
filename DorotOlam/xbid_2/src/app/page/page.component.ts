import { Component, OnInit } from '@angular/core';
import { root } from '../models/root.model';
import { PageService } from 'src/app/page/page.service';
import { ActivatedRoute } from '@angular/router';
import { profileDetails } from '../models/profilepage.model';
import { registerDetails } from '../models/registerpage.model';
import { landingDetails } from '../models/landingpage.model';
import { IndexDetails } from '../models/index.model';
@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
    root: root = new root(new profileDetails(), new registerDetails(), new landingDetails(), new IndexDetails());;
    index: IndexDetails = new IndexDetails();

    constructor(public PageService: PageService, public activatedRoute: ActivatedRoute) {
        this.root = new root(new profileDetails(), new registerDetails(), new landingDetails(), new IndexDetails());
        //this.root.indexDetails.firstName="aaaa"
        this.PageService.getIndexFromDB(this.activatedRoute.snapshot.paramMap.get('id'))
            .subscribe((res: IndexDetails) => {
                this.index = res;
                this.index.FirstName = "אהרון יהודה לייב"
                console.log(this.index);
            },
                err =>
                    console.log(err)
            );
}

    ngOnInit(): void {

        //this.PageService.getDetailesFromDB(this.activatedRoute.snapshot.paramMap.get('id'))
        //    .subscribe((res: root) => {
        //        this.root = res;
        //        console.log(this.root);
        //    },
        //        err =>
        //            console.log(err)
        //);

        this.PageService.getIndexFromDB(this.activatedRoute.snapshot.paramMap.get('id'))
            .subscribe((res: IndexDetails) => {
                this.index = res;
                this.index.FirstName="אהרון יהודה לייב"
                console.log(this.index);
            },
                err =>
                    console.log(err)
            );
    }
}
