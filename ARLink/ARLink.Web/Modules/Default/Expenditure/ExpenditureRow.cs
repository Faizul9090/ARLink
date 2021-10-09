using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ARLink.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Expenditure]")]
    [DisplayName("Expenditure"), InstanceName("Expenditure")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ExpenditureRow : Row<ExpenditureRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int64? Id
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

        [DisplayName("Employee"), Column("Employee_Id"), ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jEmployee"), TextualField("EmployeeEmployeeIdentity")]
        [LookupEditor(typeof(EmployeeRow))]
        public Int64? EmployeeId
        {
            get => fields.EmployeeId[this];
            set => fields.EmployeeId[this] = value;
        }

        [DisplayName("Month"), Column("Month_Id"), ForeignKey("[dbo].[Month]", "Id"), LeftJoin("jMonth"), TextualField("MonthName")]
        [LookupEditor(typeof(MonthRow))]
        public Int32? MonthId
        {
            get => fields.MonthId[this];
            set => fields.MonthId[this] = value;
        }

        [DisplayName("Expenditure Date"), Column("Expenditure_Date")]
        public DateTime? ExpenditureDate
        {
            get => fields.ExpenditureDate[this];
            set => fields.ExpenditureDate[this] = value;
        }

        [DisplayName("Description"), Size(350)]
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

        [DisplayName("Employee Employee Identity"), Expression("jEmployee.[Employee_Identity]")]
        public String EmployeeEmployeeIdentity
        {
            get => fields.EmployeeEmployeeIdentity[this];
            set => fields.EmployeeEmployeeIdentity[this] = value;
        }

        [DisplayName("Employee Name"), Expression("jEmployee.[Name]")]
        public String EmployeeName
        {
            get => fields.EmployeeName[this];
            set => fields.EmployeeName[this] = value;
        }

        [DisplayName("Employee Address Prmanent"), Expression("jEmployee.[Address_Prmanent]")]
        public String EmployeeAddressPrmanent
        {
            get => fields.EmployeeAddressPrmanent[this];
            set => fields.EmployeeAddressPrmanent[this] = value;
        }

        [DisplayName("Employee Address Present"), Expression("jEmployee.[Address_Present]")]
        public String EmployeeAddressPresent
        {
            get => fields.EmployeeAddressPresent[this];
            set => fields.EmployeeAddressPresent[this] = value;
        }

        [DisplayName("Employee Nid"), Expression("jEmployee.[NID]")]
        public String EmployeeNid
        {
            get => fields.EmployeeNid[this];
            set => fields.EmployeeNid[this] = value;
        }

        [DisplayName("Employee Phone Number"), Expression("jEmployee.[PhoneNumber]")]
        public String EmployeePhoneNumber
        {
            get => fields.EmployeePhoneNumber[this];
            set => fields.EmployeePhoneNumber[this] = value;
        }

        [DisplayName("Employee Email"), Expression("jEmployee.[Email]")]
        public String EmployeeEmail
        {
            get => fields.EmployeeEmail[this];
            set => fields.EmployeeEmail[this] = value;
        }

        [DisplayName("Employee Designation Id"), Expression("jEmployee.[Designation_Id]")]
        public Int32? EmployeeDesignationId
        {
            get => fields.EmployeeDesignationId[this];
            set => fields.EmployeeDesignationId[this] = value;
        }

        [DisplayName("Employee Attachment"), Expression("jEmployee.[Attachment]")]
        public String EmployeeAttachment
        {
            get => fields.EmployeeAttachment[this];
            set => fields.EmployeeAttachment[this] = value;
        }

        [DisplayName("Employee Is Active"), Expression("jEmployee.[Is_Active]")]
        public Boolean? EmployeeIsActive
        {
            get => fields.EmployeeIsActive[this];
            set => fields.EmployeeIsActive[this] = value;
        }

        [DisplayName("Employee Joining Date"), Expression("jEmployee.[Joining_Date]")]
        public DateTime? EmployeeJoiningDate
        {
            get => fields.EmployeeJoiningDate[this];
            set => fields.EmployeeJoiningDate[this] = value;
        }

        [DisplayName("Employee I User"), Expression("jEmployee.[IUser]")]
        public Int64? EmployeeIUser
        {
            get => fields.EmployeeIUser[this];
            set => fields.EmployeeIUser[this] = value;
        }

        [DisplayName("Employee I Date"), Expression("jEmployee.[IDate]")]
        public DateTime? EmployeeIDate
        {
            get => fields.EmployeeIDate[this];
            set => fields.EmployeeIDate[this] = value;
        }

        [DisplayName("Employee E User"), Expression("jEmployee.[EUser]")]
        public Int64? EmployeeEUser
        {
            get => fields.EmployeeEUser[this];
            set => fields.EmployeeEUser[this] = value;
        }

        [DisplayName("Employee E Date"), Expression("jEmployee.[EDate]")]
        public DateTime? EmployeeEDate
        {
            get => fields.EmployeeEDate[this];
            set => fields.EmployeeEDate[this] = value;
        }

        [DisplayName("Month Name"), Expression("jMonth.[Name]")]
        public String MonthName
        {
            get => fields.MonthName[this];
            set => fields.MonthName[this] = value;
        }

        [DisplayName("Month Sorting Order"), Expression("jMonth.[Sorting_Order]")]
        public Int32? MonthSortingOrder
        {
            get => fields.MonthSortingOrder[this];
            set => fields.MonthSortingOrder[this] = value;
        }

        [DisplayName("Month I User"), Expression("jMonth.[IUser]")]
        public Int64? MonthIUser
        {
            get => fields.MonthIUser[this];
            set => fields.MonthIUser[this] = value;
        }

        [DisplayName("Month I Date"), Expression("jMonth.[IDate]")]
        public DateTime? MonthIDate
        {
            get => fields.MonthIDate[this];
            set => fields.MonthIDate[this] = value;
        }

        [DisplayName("Month E User"), Expression("jMonth.[EUser]")]
        public Int64? MonthEUser
        {
            get => fields.MonthEUser[this];
            set => fields.MonthEUser[this] = value;
        }

        [DisplayName("Month E Date"), Expression("jMonth.[EDate]")]
        public DateTime? MonthEDate
        {
            get => fields.MonthEDate[this];
            set => fields.MonthEDate[this] = value;
        }

        public ExpenditureRow()
            : base()
        {
        }

        public ExpenditureRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public StringField Name;
            public Int64Field EmployeeId;
            public Int32Field MonthId;
            public DateTimeField ExpenditureDate;
            public StringField Description;
            public Int64Field IUser;
            public DateTimeField IDate;
            public Int64Field EUser;
            public DateTimeField EDate;

            public StringField EmployeeEmployeeIdentity;
            public StringField EmployeeName;
            public StringField EmployeeAddressPrmanent;
            public StringField EmployeeAddressPresent;
            public StringField EmployeeNid;
            public StringField EmployeePhoneNumber;
            public StringField EmployeeEmail;
            public Int32Field EmployeeDesignationId;
            public StringField EmployeeAttachment;
            public BooleanField EmployeeIsActive;
            public DateTimeField EmployeeJoiningDate;
            public Int64Field EmployeeIUser;
            public DateTimeField EmployeeIDate;
            public Int64Field EmployeeEUser;
            public DateTimeField EmployeeEDate;

            public StringField MonthName;
            public Int32Field MonthSortingOrder;
            public Int64Field MonthIUser;
            public DateTimeField MonthIDate;
            public Int64Field MonthEUser;
            public DateTimeField MonthEDate;
        }
    }
}
