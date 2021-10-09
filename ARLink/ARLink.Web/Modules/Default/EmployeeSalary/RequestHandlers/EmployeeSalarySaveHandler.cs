using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<ARLink.Default.EmployeeSalaryRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = ARLink.Default.EmployeeSalaryRow;

namespace ARLink.Default
{
    public interface IEmployeeSalarySaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class EmployeeSalarySaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeSalarySaveHandler
    {
        public EmployeeSalarySaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}