using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DorotOlam.Models
{
    public class Family
    {

        public  FamilyP registerDetailesP { get; set; }

        public List<MoreFamilyMember> moreFamilyMember { get; set; } = new List<MoreFamilyMember>();

    } 
    public class FamilyP
    {
       
        public string FatherId { get; set; }
        public string FatherFirstName { get; set; }
        public string FatherLastName { get; set; }
        public string FatherOrigin { get; set; }
        public string MotherId { get; set; }
        public string MotherFirstName { get; set; }
        public string MotherLastName { get; set; }
        public string MotherOrigin { get; set; }
        public string SpouseId { get; set; }
        public string SpouseFirstName { get; set; }
        public string SpouseLastName { get; set; }

        public string SpouseOrigin { get; set; }


    }

    public class MoreFamilyMember
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Id { get; set; }
        public string Origin { get; set; }
        public string Closeness { get; set; }
     
}
}
