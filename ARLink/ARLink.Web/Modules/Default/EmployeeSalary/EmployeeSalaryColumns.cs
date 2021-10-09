using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ARLink.Default.Columns
{
    [ColumnsScript("Default.EmployeeSalary")]
    [BasedOnRow(typeof(EmployeeSalaryRow), CheckNames = true)]
    public class EmployeeSalaryColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        public String EmployeeEmployeeIdentity { get; set; }
        public Decimal Amount { get; set; }
        public String MonthName { get; set; }
        public DateTime PaymentDate { get; set; }
        [EditLink]
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