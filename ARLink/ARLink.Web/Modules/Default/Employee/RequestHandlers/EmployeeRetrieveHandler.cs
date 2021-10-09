using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<ARLink.Default.EmployeeRow>;
using MyRow = ARLink.Default.EmployeeRow;

namespace ARLink.Default
{
    public interface IEmployeeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeRetrieveHandler
    {
        public EmployeeRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}