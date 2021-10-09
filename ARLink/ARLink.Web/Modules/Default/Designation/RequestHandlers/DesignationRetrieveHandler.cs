using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<ARLink.Default.DesignationRow>;
using MyRow = ARLink.Default.DesignationRow;

namespace ARLink.Default
{
    public interface IDesignationRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class DesignationRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IDesignationRetrieveHandler
    {
        public DesignationRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}