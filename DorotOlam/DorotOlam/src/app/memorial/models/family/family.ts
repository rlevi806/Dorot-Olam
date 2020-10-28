import { MoreFamilyMember } from '../moreFamilyMember/more-family-member';

export class Family {
    fatherFirstName: string="";
    fatherId: string="";
    fatherOrigin: string="";
    motherId: string="";
    motherFirstName: string="";
    motherLastName: string="";
    motherOrigin: string="";
    partnerLastName: string="";
    partnerFirstName: string="";
    partnerId: string="";
    partnerOrigin: string="";
    fatherLastName: string="";
    moreFamilyMembers:MoreFamilyMember[]=[];
}
