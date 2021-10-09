using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<ARLink.Default.EmployeeSalaryRow>;
using MyRow = ARLink.Default.EmployeeSalaryRow;

namespace ARLink.Default
{
    public interface IEmployeeSalaryListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeSalaryListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeSalaryListHandler
    {
        public EmployeeSalaryListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}