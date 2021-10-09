using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<ARLink.Default.PackageRow>;
using MyRow = ARLink.Default.PackageRow;

namespace ARLink.Default
{
    public interface IPackageListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PackageListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPackageListHandler
    {
        public PackageListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}