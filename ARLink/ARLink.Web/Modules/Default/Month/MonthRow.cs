using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ARLink.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Month]")]
    [DisplayName("Month"), InstanceName("Month")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Month")]
    public sealed class MonthRow : Row<MonthRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Name"), Size(255), NotNull, QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Sorting Order"), Column("Sorting_Order")]
        public Int32? SortingOrder
        {
            get => fields.SortingOrder[this];
            set => fields.SortingOrder[this] = value;
        }

        [DisplayName("I User")]
        public Int64? IUser
        {
            get => fields.IUser[this];
            set => fields.IUser[this] = value;
        }

        [DisplayName("I Date")]
        public DateTime? IDate
        {
            get => fields.IDate[this];
            set => fields.IDate[this] = value;
        }

        [DisplayName("E User")]
        public Int64? EUser
        {
            get => fields.EUser[this];
            set => fields.EUser[this] = value;
        }

        [DisplayName("E Date")]
        public DateTime? EDate
        {
            get => fields.EDate[this];
            set => fields.EDate[this] = value;
        }

        public MonthRow()
            : base()
        {
        }

        public MonthRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public Int32Field SortingOrder;
            public Int64Field IUser;
            public DateTimeField IDate;
            public Int64Field EUser;
            public DateTimeField EDate;
        }
    }
}
