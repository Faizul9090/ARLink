using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ARLink.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Employee]")]
    [DisplayName("Employee"), InstanceName("Employee")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Default.Employee")]
    public sealed class EmployeeRow : Row<EmployeeRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int64? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Employee Identity"), Column("Employee_Identity"), Size(255), QuickSearch, NameProperty]
        public String EmployeeIdentity
        {
            get => fields.EmployeeIdentity[this];
            set => fields.EmployeeIdentity[this] = value;
        }

        [DisplayName("Name"), Size(255), NotNull]
        public String Name
        {
            get => fields.Name[this];
            set => fields.Name[this] = value;
        }

        [DisplayName("Address Prmanent"), Column("Address_Prmanent"), Size(300)]
        public String AddressPrmanent
        {
            get => fields.AddressPrmanent[this];
            set => fields.AddressPrmanent[this] = value;
        }

        [DisplayName("Address Present"), Column("Address_Present"), Size(300)]
        public String AddressPresent
        {
            get => fields.AddressPresent[this];
            set => fields.AddressPresent[this] = value;
        }

        [DisplayName("Nid"), Column("NID"), Size(20)]
        public String Nid
        {
            get => fields.Nid[this];
            set => fields.Nid[this] = value;
        }

        [DisplayName("Phone Number"), Size(11)]
        public String PhoneNumber
        {
            get => fields.PhoneNumber[this];
            set => fields.PhoneNumber[this] = value;
        }

        [DisplayName("Email"), Size(50)]
        public String Email
        {
            get => fields.Email[this];
            set => fields.Email[this] = value;
        }

        [DisplayName("Designation"), Column("Designation_Id"), ForeignKey("[dbo].[Designation]", "Id"), LeftJoin("jDesignation"), TextualField("DesignationName")]
        [LookupEditor(typeof(DesignationRow))]
        public Int32? DesignationId
        {
            get => fields.DesignationId[this];
            set => fields.DesignationId[this] = value;
        }

        [DisplayName("Attachment"), Size(300)]

        [FileUploadEditor(DisplayFileName = true, FilenameFormat = "File/Employee/~")]
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

        [DisplayName("Joining Date"), Column("Joining_Date")]
        public DateTime? JoiningDate
        {
            get => fields.JoiningDate[this];
            set => fields.JoiningDate[this] = value;
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

        [DisplayName("Designation Name"), Expression("jDesignation.[Name]")]
        public String DesignationName
        {
            get => fields.DesignationName[this];
            set => fields.DesignationName[this] = value;
        }

        [DisplayName("Designation Sorting Order"), Expression("jDesignation.[Sorting_Order]")]
        public Int32? DesignationSortingOrder
        {
            get => fields.DesignationSortingOrder[this];
            set => fields.DesignationSortingOrder[this] = value;
        }

        [DisplayName("Designation I User"), Expression("jDesignation.[IUser]")]
        public Int64? DesignationIUser
        {
            get => fields.DesignationIUser[this];
            set => fields.DesignationIUser[this] = value;
        }

        [DisplayName("Designation I Date"), Expression("jDesignation.[IDate]")]
        public DateTime? DesignationIDate
        {
            get => fields.DesignationIDate[this];
            set => fields.DesignationIDate[this] = value;
        }

        [DisplayName("Designation E User"), Expression("jDesignation.[EUser]")]
        public Int64? DesignationEUser
        {
            get => fields.DesignationEUser[this];
            set => fields.DesignationEUser[this] = value;
        }

        [DisplayName("Designation E Date"), Expression("jDesignation.[EDate]")]
        public DateTime? DesignationEDate
        {
            get => fields.DesignationEDate[this];
            set => fields.DesignationEDate[this] = value;
        }


        [Expression("T0.Name + ' (' + T0.CustomerIdentity + ')'")]
        public String LookupText
        {
            get => fields.LookupText[this];
            set => fields.LookupText[this] = value;
        }

        public EmployeeRow()
            : base()
        {
        }

        public EmployeeRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField LookupText;
            public StringField EmployeeIdentity;
            public StringField Name;
            public StringField AddressPrmanent;
            public StringField AddressPresent;
            public StringField Nid;
            public StringField PhoneNumber;
            public StringField Email;
            public Int32Field DesignationId;
            public StringField Attachment;
            public BooleanField IsActive;
            public DateTimeField JoiningDate;
            public Int64Field IUser;
            public DateTimeField IDate;
            public Int64Field EUser;
            public DateTimeField EDate;

            public StringField DesignationName;
            public Int32Field DesignationSortingOrder;
            public Int64Field DesignationIUser;
            public DateTimeField DesignationIDate;
            public Int64Field DesignationEUser;
            public DateTimeField DesignationEDate;
        }
    }
}
