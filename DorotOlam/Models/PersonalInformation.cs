using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DorotOlam.Models
{
    public class PersonalInformation
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PreviousFamilyName { get; set; }
        public string Gender { get; set; }
        public string Attribution { get; set; }
        public string Degree { get; set; }
        public byte[] Picture { get; set; }
        public byte[] SituationPicture { get; set; }
    }
}
