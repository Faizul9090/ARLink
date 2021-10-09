using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ARLink.Default.Forms
{
    [FormScript("Default.Designation")]
    [BasedOnRow(typeof(DesignationRow), CheckNames = true)]
    public class DesignationForm
    {
        [HalfWidth(UntilNext = true)]
        public String Name { get; set; }
        public Int32 SortingOrder { get; set; }
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