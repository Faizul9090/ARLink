using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ARLink.Default.Pages
{

    [PageAuthorize(typeof(MonthRow))]
    public class MonthController : Controller
    {
        [Route("Default/Month")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Month/MonthIndex.cshtml");
        }
    }
}