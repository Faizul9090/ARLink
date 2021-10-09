using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ARLink.Default.Columns
{
    [ColumnsScript("Default.Package")]
    [BasedOnRow(typeof(PackageRow), CheckNames = true)]
    public class PackageColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [EditLink]
        public String Name { get; set; }
        public Decimal Amount { get; set; }
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