using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ARLink.Default.Pages
{

    [PageAuthorize(typeof(ExpenditureRow))]
    public class ExpenditureController : Controller
    {
        [Route("Default/Expenditure")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Expenditure/ExpenditureIndex.cshtml");
        }
    }
}