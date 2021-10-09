using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = ARLink.Default.AreaRow;

namespace ARLink.Default
{
    public interface IAreaDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AreaDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAreaDeleteHandler
    {
        public AreaDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}