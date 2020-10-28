using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DorotOlam.Models
{
    public class LifeStory
    {

        public DateTime BirthDate { get; set; }
        public string Birthplace { get; set; }
        public DateTime Deathdate { get; set; }
        public int Deathage { get; set; }
        public string Deathplace { get; set; }
        public string Durialplace { get; set; }
        public string Lifehistory { get; set; }
        public string Residence { get; set; }
        public int tags { get; set; }

        public List<MoreAddress> moreAddress { get; set; } = new List<MoreAddress>();

}
    public class MoreAddress
    {
        public string Name { get; set; }
}

}

