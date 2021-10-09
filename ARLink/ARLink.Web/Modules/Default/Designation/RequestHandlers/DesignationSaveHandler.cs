using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<ARLink.Default.DesignationRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = ARLink.Default.DesignationRow;

namespace ARLink.Default
{
    public interface IDesignationSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class DesignationSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IDesignationSaveHandler
    {
        public DesignationSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}