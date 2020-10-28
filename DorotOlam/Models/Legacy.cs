using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DorotOlam.Models
{
    public class Legacy
    {
        //public string Affiliation { get; set; }
        //public string Template { get; set; }

        public List<StudyPlace> studyPlace { get; set; } = new List<StudyPlace>();
        public List<Teacher> rabbis { get; set; } = new List<Teacher>();

        public List<Student> student { get; set; } = new List<Student>();

        public List<Work> work { get; set; } = new List<Work>();

        public List<MoreLink> moreLink { get; set; } = new List<MoreLink>();

    }
       
        public class Teacher
        {
            public string Name { get; set; }
            public string Address { get; set; }
            //public string Role { get; set; }
        }
        public class Student
        {
            public string Name { get; set; }
            public string Address { get; set; }
           // public string Role { get; set; }
        }

        public class Work
        {
        public string Name { get; set; }
        public string Address { get; set; }
         public string Role { get; set; }
    }
    public class MoreLink
    {
        public string Description { get; set; }
        public string Link { get; set; }
    }
    public class StudyPlace
    {
        public string Name { get; set; }
        public string Address { get; set; }
        public string Role { get; set; }
    }

}
