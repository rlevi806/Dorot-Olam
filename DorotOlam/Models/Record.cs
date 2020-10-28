using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DorotOlam.Models
{
    public class Record
    {
      public   PersonalInformation PersonalInformation { get; set; }
        public Legacy Legacy { get; set; }
        public LifeStory LifeStory { get; set; }

        public Family Family { get; set; }
    }
}
