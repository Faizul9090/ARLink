using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ARLink.Default.Forms
{
    [FormScript("Default.EmployeeSalary")]
    [BasedOnRow(typeof(EmployeeSalaryRow), CheckNames = true)]
    public class EmployeeSalaryForm
    {
        [HalfWidth(UntilNext = true)]
        public Int64 EmployeeId { get; set; }
        public Decimal Amount { get; set; }
        public Int32 MonthId { get; set; }
        public DateTime PaymentDate { get; set; }
        public String Description { get; set; }
        [Hidden]
        public Int64 IUser { get; set; }
        [Hidden]
        public DateTime IDate { get; set; }
        [Hidden]
        public Int64 EUser { get; set; }
        [Hidden]
        public DateTime EDate { get; set; }
    }
}