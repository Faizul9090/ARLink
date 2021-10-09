using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<ARLink.Default.ExpenditureRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = ARLink.Default.ExpenditureRow;

namespace ARLink.Default
{
    public interface IExpenditureSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class ExpenditureSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IExpenditureSaveHandler
    {
        public ExpenditureSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}