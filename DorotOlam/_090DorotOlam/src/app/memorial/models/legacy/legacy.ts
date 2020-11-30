import { MoreLink } from '../moreLink/more-link';
import { Occupation } from '../occupation/occupation';
import { Student } from '../student/student';
import { StudyPlace } from '../studyPlace/studyplace';
import { Teacher } from '../teacher/teacher';
import { Work } from '../work/work';

export class Legacy {
    affiliation: string="";
    template: string="";
    studyPlace: StudyPlace[]=[];
    occupation: Occupation[]=[];
    teachers: Teacher[]=[];
    students: Student[]=[];
    works: Work[]=[];
    moreLink: MoreLink[]=[];
}
