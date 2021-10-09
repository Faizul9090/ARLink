using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ARLink.Default.Forms
{
    [FormScript("Default.Employee")]
    [BasedOnRow(typeof(EmployeeRow), CheckNames = true)]
    public class EmployeeForm
    {
        [HalfWidth(UntilNext = true)]
        public String EmployeeIdentity { get; set; }
        public String Name { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String AddressPrmanent { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String AddressPresent { get; set; }
        public String Nid { get; set; }
        public String PhoneNumber { get; set; }
        public String Email { get; set; }
        public Int32 DesignationId { get; set; }
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