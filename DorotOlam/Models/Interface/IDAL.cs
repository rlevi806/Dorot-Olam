using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DorotOlam.Models.Interface
{
    public interface IDAL
    {
        public string UpdateUserData();//IndexDetailes indexDetailes, ProfileDetailes profileDetailes);
        public string InsertUserData();
        public Record GetRootDetailes(string numId);
    }
}
