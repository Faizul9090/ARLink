using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = ARLink.Default.PackageRow;

namespace ARLink.Default
{
    public interface IPackageDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PackageDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPackageDeleteHandler
    {
        public PackageDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}