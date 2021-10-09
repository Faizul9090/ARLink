using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ARLink.Default.Forms
{
    [FormScript("Default.Area")]
    [BasedOnRow(typeof(AreaRow), CheckNames = true)]
    public class AreaForm
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