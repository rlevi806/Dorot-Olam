import { StudyPlace } from './study-place';

export class landingDetails {
    affiliation: string="";
    template: string="";
    studyPlace: StudyPlace[]=[];
    occupation: occupation[]=[];
    rabbis: rabbis[]=[];
    students: Student[]=[];
    works: Work[]=[];
    moreLink: MoreLink[]=[];
}
export class occupation {
    role: string;
    address: string;
    nameInstitution: string;
}
export class rabbis {
    name: string;
    address: string;
    role: string;
}
export class Student {
    name: string;
    address: string;
    role: string;
}
export class Work {
    name: string;
    description:  string;
    link:  string;
}
export class MoreLink {
    description:  string;
    link:  string;
}