using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ARLink.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Customer]")]
    [DisplayName("Customer"), InstanceName("Customer")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CustomerRow : Row<CustomerRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int64? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Customer Identity"), Column("Customer_Identity"), Size(255), QuickSearch, NameProperty]
        public String CustomerIdentity
        {
            get => fields.CustomerIdentity[this];
            set => fields.CustomerIdentity[this] = value;
        }

        [DisplayName("Name"), Size(255), NotNull]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Address"), Size(300), NotNull]
        public String Address
        {
            get => fields.Address[this];
            set => fields.Address[this] = value;
        }

        [DisplayName("Area"), Column("Area_Id"), ForeignKey("[dbo].[Area]", "Id"), LeftJoin("jArea"), TextualField("AreaName")]
        public Int32? AreaId
        {
            get => fields.AreaId[this];
            set => fields.AreaId[this] = value;
        }

        [DisplayName("Nid"), Column("NID"), Size(20)]
        public String Nid
        {
            get => fields.Nid[this];
            set => fields.Nid[this] = value;
        }

        [DisplayName("Phone Number1"), Size(11), NotNull]
        public String PhoneNumber1
        {
            get => fields.PhoneNumber1[this];
            set => fields.PhoneNumber1[this] = value;
        }

        [DisplayName("Phone Number2"), Size(11)]
        public String PhoneNumber2
        {
            get => fields.PhoneNumber2[this];
            set => fields.PhoneNumber2[this] = value;
        }

        [DisplayName("Email"), Size(50)]
        public String Email
        {
            get => fields.Email[this];
            set => fields.Email[this] = value;
        }

        [DisplayName("Attachment"), Size(300)]
        [FileUploadEditor(DisplayFileName = true, FilenameFormat = "File/Customer/~")]
        public String Attachment
        {
            get => fields.Attachment[this];
            set => fields.Attachment[this] = value;
        }

        [DisplayName("Is Active"), Column("Is_Active")]
        public Boolean? IsActive
        {
            get => fields.IsActive[this];
            set => fields.IsActive[this] = value;
        }

        [DisplayName("Connection Date"), Column("Connection_Date")]
        public DateTime? ConnectionDate
        {
            get => fields.ConnectionDate[this];
            set => fields.ConnectionDate[this] = value;
        }

        [DisplayName("Package"), Column("Package_Id"), ForeignKey("[dbo].[Package]", "Id"), LeftJoin("jPackage"), TextualField("PackageName")]
        public Int32? PackageId
        {
            get => fields.PackageId[this];
            set => fields.PackageId[this] = value;
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

        [DisplayName("Area Name"), Expression("jArea.[Name]")]
        public String AreaName
        {
            get => fields.AreaName[this];
            set => fields.AreaName[this] = value;
        }

        [DisplayName("Area Sorting Order"), Expression("jArea.[Sorting_Order]")]
        public Int32? AreaSortingOrder
        {
            get => fields.AreaSortingOrder[this];
            set => fields.AreaSortingOrder[this] = value;
        }

        [DisplayName("Area I User"), Expression("jArea.[IUser]")]
        public Int64? AreaIUser
        {
            get => fields.AreaIUser[this];
            set => fields.AreaIUser[this] = value;
        }

        [DisplayName("Area I Date"), Expression("jArea.[IDate]")]
        public DateTime? AreaIDate
        {
            get => fields.AreaIDate[this];
            set => fields.AreaIDate[this] = value;
        }

        [DisplayName("Area E User"), Expression("jArea.[EUser]")]
        public Int64? AreaEUser
        {
            get => fields.AreaEUser[this];
            set => fields.AreaEUser[this] = value;
        }

        [DisplayName("Area E Date"), Expression("jArea.[EDate]")]
        public DateTime? AreaEDate
        {
            get => fields.AreaEDate[this];
            set => fields.AreaEDate[this] = value;
        }

        [DisplayName("Package Name"), Expression("jPackage.[Name]")]
        public String PackageName
        {
            get => fields.PackageName[this];
            set => fields.PackageName[this] = value;
        }

        [DisplayName("Package Amount"), Expression("jPackage.[Amount]")]
        public Decimal? PackageAmount
        {
            get => fields.PackageAmount[this];
            set => fields.PackageAmount[this] = value;
        }

        [DisplayName("Package Description"), Expression("jPackage.[Description]")]
        public String PackageDescription
        {
            get => fields.PackageDescription[this];
            set => fields.PackageDescription[this] = value;
        }

        [DisplayName("Package I User"), Expression("jPackage.[IUser]")]
        public Int64? PackageIUser
        {
            get => fields.PackageIUser[this];
            set => fields.PackageIUser[this] = value;
        }

        [DisplayName("Package I Date"), Expression("jPackage.[IDate]")]
        public DateTime? PackageIDate
        {
            get => fields.PackageIDate[this];
            set => fields.PackageIDate[this] = value;
        }

        [DisplayName("Package E User"), Expression("jPackage.[EUser]")]
        public Int64? PackageEUser
        {
            get => fields.PackageEUser[this];
            set => fields.PackageEUser[this] = value;
        }

        [DisplayName("Package E Date"), Expression("jPackage.[EDate]")]
        public DateTime? PackageEDate
        {
            get => fields.PackageEDate[this];
            set => fields.PackageEDate[this] = value;
        }

        [Expression("T0.Name + ' (' + T0.CustomerIdentity + ')'")]
        public String LookupText
        {
            get => fields.LookupText[this];
            set => fields.LookupText[this] = value;
        }

        

        public CustomerRow()
            : base()
        {
        }

        public CustomerRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField LookupText;
            public StringField CustomerIdentity;
            public StringField Name;
            public StringField Address;
            public Int32Field AreaId;
            public StringField Nid;
            public StringField PhoneNumber1;
            public StringField PhoneNumber2;
            public StringField Email;
            public StringField Attachment;
            public BooleanField IsActive;
            public DateTimeField ConnectionDate;
            public Int32Field PackageId;
            public Int64Field IUser;
            public DateTimeField IDate;
            public Int64Field EUser;
            public DateTimeField EDate;

            public StringField AreaName;
            public Int32Field AreaSortingOrder;
            public Int64Field AreaIUser;
            public DateTimeField AreaIDate;
            public Int64Field AreaEUser;
            public DateTimeField AreaEDate;

            public StringField PackageName;
            public DecimalField PackageAmount;
            public StringField PackageDescription;
            public Int64Field PackageIUser;
            public DateTimeField PackageIDate;
            public Int64Field PackageEUser;
            public DateTimeField PackageEDate;
        }
    }
}
