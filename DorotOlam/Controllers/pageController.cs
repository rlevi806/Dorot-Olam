using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DorotOlam.Models;
using DorotOlam.Models.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DorotOlam.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class recordController : ControllerBase
    {
        private IDAL _dal;
        public recordController(IDAL dal)
        {
            _dal = dal;

        }

        [HttpGet]
        public ActionResult<Record> GetRecordById([FromQuery] string numId)
        {


            Record rootDetailes = _dal.GetRootDetailes(numId);
          //return new Record
          //  { 
          //      PersonalInformation = new PersonalInformation{ Degree = "הרב",FirstName="אריה יהודה לייב",LastName="שטיינמן" },
          //      Legacy=new Legacy { student=new List<Student> { new Student { Name="יחיאל שלזינגר"},new Student { Name="משה יהודה שניידר"} } },
          //      LifeStory=new LifeStory { BirthDate=new DateTime(1914,11,11),Deathdate=new DateTime(2017,12,12)},
          //      Family=new Family { moreFamilyMember = {new MoreFamilyMember { FirstName="תמר",LastName="שטיינמן"} }}
          //  };
            return rootDetailes;
        }

        [HttpGet]
        public ActionResult<PersonalInformation> GetIndexDetailes([FromQuery] string numId)
        {


            return new PersonalInformation
            {
                 Degree = "הרב", FirstName = "אריה יהודה לייב", LastName = "שטיינמן" 
            };
        }
    }
}