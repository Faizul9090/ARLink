using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<ARLink.Default.MonthRow>;
using MyRow = ARLink.Default.MonthRow;

namespace ARLink.Default
{
    public interface IMonthRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class MonthRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IMonthRetrieveHandler
    {
        public MonthRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}