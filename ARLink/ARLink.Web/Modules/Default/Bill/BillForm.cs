using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace ARLink.Default.Forms
{
    [FormScript("Default.Bill")]
    [BasedOnRow(typeof(BillRow), CheckNames = true)]
    public class BillForm
    {
        [HalfWidth(UntilNext = true)]
        public Int64 CustomerId { get; set; }
        public Decimal BillAmount { get; set; }
        public Int32 MonthId { get; set; }
        public DateTime PaymentDate { get; set; }
        public Int64 RecivedBy { get; set; }
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