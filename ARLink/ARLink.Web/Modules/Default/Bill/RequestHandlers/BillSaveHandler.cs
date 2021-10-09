using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<ARLink.Default.BillRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = ARLink.Default.BillRow;

namespace ARLink.Default
{
    public interface IBillSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class BillSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBillSaveHandler
    {
        public BillSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}