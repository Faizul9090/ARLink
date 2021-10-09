using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ARLink.Default.Forms
{
    [FormScript("Default.Customer")]
    [BasedOnRow(typeof(CustomerRow), CheckNames = true)]
    public class CustomerForm
    {
        [HalfWidth(UntilNext =true)]
        public String CustomerIdentity { get; set; }
        public String Name { get; set; }
        [TextAreaEditor(Rows = 2)]
        public String Address { get; set; }
        public Int32 AreaId { get; set; }
        public String Nid { get; set; }
        public String PhoneNumber1 { get; set; }
        public String PhoneNumber2 { get; set; }
        public String Email { get; set; }
        public String Attachment { get; set; }
        public Boolean IsActive { get; set; }
        public DateTime ConnectionDate { get; set; }
        public Int32 PackageId { get; set; }
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