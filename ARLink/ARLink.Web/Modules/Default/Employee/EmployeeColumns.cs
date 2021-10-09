using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ARLink.Default.Columns
{
    [ColumnsScript("Default.Employee")]
    [BasedOnRow(typeof(EmployeeRow), CheckNames = true)]
    public class EmployeeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String EmployeeIdentity { get; set; }
        public String Name { get; set; }
        public String AddressPrmanent { get; set; }
        public String AddressPresent { get; set; }
        public String Nid { get; set; }
        public String PhoneNumber { get; set; }
        public String Email { get; set; }
        public String DesignationName { get; set; }
        public String Attachment { get; set; }
        public Boolean IsActive { get; set; }
        public DateTime JoiningDate { get; set; }
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