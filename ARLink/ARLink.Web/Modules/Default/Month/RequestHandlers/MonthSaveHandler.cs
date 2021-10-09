using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<ARLink.Default.MonthRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = ARLink.Default.MonthRow;

namespace ARLink.Default
{
    public interface IMonthSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MonthSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMonthSaveHandler
    {
        public MonthSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}