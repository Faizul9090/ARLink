using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ARLink.Default.Pages
{

    [PageAuthorize(typeof(EmployeeSalaryRow))]
    public class EmployeeSalaryController : Controller
    {
        [Route("Default/EmployeeSalary")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/EmployeeSalary/EmployeeSalaryIndex.cshtml");
        }
    }
}