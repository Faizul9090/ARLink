using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = ARLink.Default.ExpenditureRow;

namespace ARLink.Default
{
    public interface IExpenditureDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class ExpenditureDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IExpenditureDeleteHandler
    {
        public ExpenditureDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}