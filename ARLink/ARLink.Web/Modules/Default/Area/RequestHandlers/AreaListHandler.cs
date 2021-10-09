using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<ARLink.Default.AreaRow>;
using MyRow = ARLink.Default.AreaRow;

namespace ARLink.Default
{
    public interface IAreaListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AreaListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAreaListHandler
    {
        public AreaListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}