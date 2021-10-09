using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<ARLink.Default.PackageRow>;
using MyRow = ARLink.Default.PackageRow;

namespace ARLink.Default
{
    public interface IPackageRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PackageRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPackageRetrieveHandler
    {
        public PackageRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}