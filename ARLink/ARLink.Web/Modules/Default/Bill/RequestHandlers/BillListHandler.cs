using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<ARLink.Default.BillRow>;
using MyRow = ARLink.Default.BillRow;

namespace ARLink.Default
{
    public interface IBillListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class BillListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBillListHandler
    {
        public BillListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}