using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ARLink.Default.Pages
{

    [PageAuthorize(typeof(BillRow))]
    public class BillController : Controller
    {
        [Route("Default/Bill")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Bill/BillIndex.cshtml");
        }
    }
}