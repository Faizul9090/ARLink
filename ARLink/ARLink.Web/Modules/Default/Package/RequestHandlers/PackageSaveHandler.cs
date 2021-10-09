using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<ARLink.Default.PackageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = ARLink.Default.PackageRow;

namespace ARLink.Default
{
    public interface IPackageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PackageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPackageSaveHandler
    {
        public PackageSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}