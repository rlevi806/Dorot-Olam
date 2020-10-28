import { MoreAddress } from '../moreAddress/more-address';

export class LifeStory {
    birthDate: Date;
    birthPlace: string="";
    deathDate: Date;
    deathAge: number;
    deathPlace: string="";
    burialPlace: string="";
    lifeHistory: string="";
    residence: string="";
    tags:any="";
    moreAddress:MoreAddress[]=[];
}
