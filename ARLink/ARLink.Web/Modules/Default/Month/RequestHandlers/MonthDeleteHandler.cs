using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = ARLink.Default.MonthRow;

namespace ARLink.Default
{
    public interface IMonthDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class MonthDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IMonthDeleteHandler
    {
        public MonthDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}