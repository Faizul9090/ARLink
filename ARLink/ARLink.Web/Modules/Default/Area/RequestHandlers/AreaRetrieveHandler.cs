using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<ARLink.Default.AreaRow>;
using MyRow = ARLink.Default.AreaRow;

namespace ARLink.Default
{
    public interface IAreaRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AreaRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAreaRetrieveHandler
    {
        public AreaRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}