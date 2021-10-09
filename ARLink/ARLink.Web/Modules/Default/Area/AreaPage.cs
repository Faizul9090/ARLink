using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ARLink.Default.Pages
{

    [PageAuthorize(typeof(AreaRow))]
    public class AreaController : Controller
    {
        [Route("Default/Area")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Area/AreaIndex.cshtml");
        }
    }
}