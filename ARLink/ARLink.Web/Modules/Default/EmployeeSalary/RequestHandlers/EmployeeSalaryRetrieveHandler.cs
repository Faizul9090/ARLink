using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<ARLink.Default.EmployeeSalaryRow>;
using MyRow = ARLink.Default.EmployeeSalaryRow;

namespace ARLink.Default
{
    public interface IEmployeeSalaryRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeSalaryRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeSalaryRetrieveHandler
    {
        public EmployeeSalaryRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}