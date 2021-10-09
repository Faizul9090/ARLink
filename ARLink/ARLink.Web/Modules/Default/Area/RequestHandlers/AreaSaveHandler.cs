using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<ARLink.Default.AreaRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = ARLink.Default.AreaRow;

namespace ARLink.Default
{
    public interface IAreaSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AreaSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAreaSaveHandler
    {
        public AreaSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}