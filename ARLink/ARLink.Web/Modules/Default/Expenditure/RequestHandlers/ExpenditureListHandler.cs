using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<ARLink.Default.ExpenditureRow>;
using MyRow = ARLink.Default.ExpenditureRow;

namespace ARLink.Default
{
    public interface IExpenditureListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class ExpenditureListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IExpenditureListHandler
    {
        public ExpenditureListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}