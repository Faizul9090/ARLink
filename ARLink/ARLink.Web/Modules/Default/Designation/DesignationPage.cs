using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ARLink.Default.Pages
{

    [PageAuthorize(typeof(DesignationRow))]
    public class DesignationController : Controller
    {
        [Route("Default/Designation")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Designation/DesignationIndex.cshtml");
        }
    }
}