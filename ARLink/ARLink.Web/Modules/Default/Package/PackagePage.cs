using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ARLink.Default.Pages
{

    [PageAuthorize(typeof(PackageRow))]
    public class PackageController : Controller
    {
        [Route("Default/Package")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Package/PackageIndex.cshtml");
        }
    }
}