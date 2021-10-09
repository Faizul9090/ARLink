using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<ARLink.Default.DesignationRow>;
using MyRow = ARLink.Default.DesignationRow;

namespace ARLink.Default
{
    public interface IDesignationListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class DesignationListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IDesignationListHandler
    {
        public DesignationListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}