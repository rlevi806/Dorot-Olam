using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DorotOlam.Models.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DorotOlam.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class DetailesController : ControllerBase
    {
        private IDAL _dal;
        public DetailesController(IDAL dal)
        {
            _dal = dal;

        }


        [HttpPost]
        public ActionResult<string> SendMessgeToCustomer(string check)
        {
           
            string response = _dal.InsertUserData();
            return response;
        }

    }
}