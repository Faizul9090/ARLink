using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ARLink.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Package]")]
    [DisplayName("Package"), InstanceName("Package")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PackageRow : Row<PackageRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int32? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Name"), Size(100), QuickSearch, NameProperty]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Amount"), Size(18)]
        public Decimal? Amount
        {
            get => fields.Amount[this];
            set => fields.Amount[this] = value;
        }

        [DisplayName("Description"), Size(200)]
        public String Description
        {
            get => fields.Description[this];
            set => fields.Description[this] = value;
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

        public PackageRow()
            : base()
        {
        }

        public PackageRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField Name;
            public DecimalField Amount;
            public StringField Description;
            public Int64Field IUser;
            public DateTimeField IDate;
            public Int64Field EUser;
            public DateTimeField EDate;
        }
    }
}
