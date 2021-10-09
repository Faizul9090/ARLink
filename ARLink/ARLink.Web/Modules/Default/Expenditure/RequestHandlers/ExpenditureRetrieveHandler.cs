using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<ARLink.Default.ExpenditureRow>;
using MyRow = ARLink.Default.ExpenditureRow;

namespace ARLink.Default
{
    public interface IExpenditureRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class ExpenditureRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IExpenditureRetrieveHandler
    {
        public ExpenditureRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}