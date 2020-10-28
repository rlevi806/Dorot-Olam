export class  registerDetails{
    fatherFirstName: string="";
    motherId: string="";
    motherFirstName: string="";
    motherLastName: string="";
    motherOrigin: string="";
    fatherId: string="";
    fatherOrigin: string="";
    partnerLastName: string="";
    partnerFirstName: string="";
    partnerId: string="";
    partnerOrigin: string="";
    fatherLastName: string="";
    moreFamilyMembers:MoreFamilyMember[]=[];
}
export class MoreFamilyMember{
    firstName:  string="";
    lastName:  string="";
    id: string="";
    origin:  string="";
    closeness:  string="";
}