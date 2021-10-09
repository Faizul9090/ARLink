using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = ARLink.Default.EmployeeSalaryRow;

namespace ARLink.Default
{
    public interface IEmployeeSalaryDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeSalaryDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeSalaryDeleteHandler
    {
        public EmployeeSalaryDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}