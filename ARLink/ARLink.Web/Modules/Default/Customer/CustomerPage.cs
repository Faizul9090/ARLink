using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace ARLink.Default.Pages
{

    [PageAuthorize(typeof(CustomerRow))]
    public class CustomerController : Controller
    {
        [Route("Default/Customer")]
        public ActionResult Index()
        {
            return View("~/Modules/Default/Customer/CustomerIndex.cshtml");
        }
    }
}