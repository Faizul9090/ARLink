using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ARLink.Default.Columns
{
    [ColumnsScript("Default.Customer")]
    [BasedOnRow(typeof(CustomerRow), CheckNames = true)]
    public class CustomerColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int64 Id { get; set; }
        [EditLink]
        public String CustomerIdentity { get; set; }
        public String Name { get; set; }
        public String Address { get; set; }
        public String AreaName { get; set; }
        public String Nid { get; set; }
        public String PhoneNumber1 { get; set; }
        public String PhoneNumber2 { get; set; }
        public String Email { get; set; }
        public String Attachment { get; set; }
        public Boolean IsActive { get; set; }
        public DateTime ConnectionDate { get; set; }
        public String PackageName { get; set; }
        public Int64 IUser { get; set; }
        public DateTime IDate { get; set; }
        public Int64 EUser { get; set; }
        public DateTime EDate { get; set; }
    }
}