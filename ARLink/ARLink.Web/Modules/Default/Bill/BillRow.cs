using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace ARLink.Default
{
    [ConnectionKey("Default"), Module("Default"), TableName("[dbo].[Bill]")]
    [DisplayName("Bill"), InstanceName("Bill")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class BillRow : Row<BillRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity, IdProperty]
        public Int64? Id
        {
            get => fields.Id[this];
            set => fields.Id[this] = value;
        }

        [DisplayName("Customer"), Column("Customer_Id"), ForeignKey("[dbo].[Customer]", "Id"), LeftJoin("jCustomer"), TextualField("CustomerCustomerIdentity")]
        [LookupEditor(typeof(CustomerRow))]
        public Int64? CustomerId
        {
            get => fields.CustomerId[this];
            set => fields.CustomerId[this] = value;
        }

        [DisplayName("Bill Amount"), Column("Bill_Amount"), Size(18)]
        public Decimal? BillAmount
        {
            get => fields.BillAmount[this];
            set => fields.BillAmount[this] = value;
        }

        [DisplayName("Month"), Column("Month_Id"), ForeignKey("[dbo].[Month]", "Id"), LeftJoin("jMonth"), TextualField("MonthName")]
        [LookupEditor(typeof(MonthRow))]
        public Int32? MonthId
        {
            get => fields.MonthId[this];
            set => fields.MonthId[this] = value;
        }

        [DisplayName("Payment Date"), Column("Payment_Date")]
        public DateTime? PaymentDate
        {
            get => fields.PaymentDate[this];
            set => fields.PaymentDate[this] = value;
        }

        [DisplayName("Recived By"), Column("Recived_By"), ForeignKey("[dbo].[Employee]", "Id"), LeftJoin("jRecivedBy"), TextualField("RecivedByEmployeeIdentity")]
        [LookupEditor(typeof(EmployeeRow))]
        public Int64? RecivedBy
        {
            get => fields.RecivedBy[this];
            set => fields.RecivedBy[this] = value;
        }

        [DisplayName("Description"), Size(350), QuickSearch, NameProperty]
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

        [DisplayName("Customer Customer Identity"), Expression("jCustomer.[Customer_Identity]")]
        public String CustomerCustomerIdentity
        {
            get => fields.CustomerCustomerIdentity[this];
            set => fields.CustomerCustomerIdentity[this] = value;
        }

        [DisplayName("Customer Name"), Expression("jCustomer.[Name]")]
        public String CustomerName
        {
            get => fields.CustomerName[this];
            set => fields.CustomerName[this] = value;
        }

        [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
        public String CustomerAddress
        {
            get => fields.CustomerAddress[this];
            set => fields.CustomerAddress[this] = value;
        }

        [DisplayName("Customer Area Id"), Expression("jCustomer.[Area_Id]")]
        public Int32? CustomerAreaId
        {
            get => fields.CustomerAreaId[this];
            set => fields.CustomerAreaId[this] = value;
        }

        [DisplayName("Customer Nid"), Expression("jCustomer.[NID]")]
        public String CustomerNid
        {
            get => fields.CustomerNid[this];
            set => fields.CustomerNid[this] = value;
        }

        [DisplayName("Customer Phone Number1"), Expression("jCustomer.[PhoneNumber1]")]
        public String CustomerPhoneNumber1
        {
            get => fields.CustomerPhoneNumber1[this];
            set => fields.CustomerPhoneNumber1[this] = value;
        }

        [DisplayName("Customer Phone Number2"), Expression("jCustomer.[PhoneNumber2]")]
        public String CustomerPhoneNumber2
        {
            get => fields.CustomerPhoneNumber2[this];
            set => fields.CustomerPhoneNumber2[this] = value;
        }

        [DisplayName("Customer Email"), Expression("jCustomer.[Email]")]
        public String CustomerEmail
        {
            get => fields.CustomerEmail[this];
            set => fields.CustomerEmail[this] = value;
        }

        [DisplayName("Customer Attachment"), Expression("jCustomer.[Attachment]")]
        public String CustomerAttachment
        {
            get => fields.CustomerAttachment[this];
            set => fields.CustomerAttachment[this] = value;
        }

        [DisplayName("Customer Is Active"), Expression("jCustomer.[Is_Active]")]
        public Boolean? CustomerIsActive
        {
            get => fields.CustomerIsActive[this];
            set => fields.CustomerIsActive[this] = value;
        }

        [DisplayName("Customer Connection Date"), Expression("jCustomer.[Connection_Date]")]
        public DateTime? CustomerConnectionDate
        {
            get => fields.CustomerConnectionDate[this];
            set => fields.CustomerConnectionDate[this] = value;
        }

        [DisplayName("Customer I User"), Expression("jCustomer.[IUser]")]
        public Int64? CustomerIUser
        {
            get => fields.CustomerIUser[this];
            set => fields.CustomerIUser[this] = value;
        }

        [DisplayName("Customer I Date"), Expression("jCustomer.[IDate]")]
        public DateTime? CustomerIDate
        {
            get => fields.CustomerIDate[this];
            set => fields.CustomerIDate[this] = value;
        }

        [DisplayName("Customer E User"), Expression("jCustomer.[EUser]")]
        public Int64? CustomerEUser
        {
            get => fields.CustomerEUser[this];
            set => fields.CustomerEUser[this] = value;
        }

        [DisplayName("Customer E Date"), Expression("jCustomer.[EDate]")]
        public DateTime? CustomerEDate
        {
            get => fields.CustomerEDate[this];
            set => fields.CustomerEDate[this] = value;
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

        [DisplayName("Recived By Employee Identity"), Expression("jRecivedBy.[Employee_Identity]")]
        public String RecivedByEmployeeIdentity
        {
            get => fields.RecivedByEmployeeIdentity[this];
            set => fields.RecivedByEmployeeIdentity[this] = value;
        }

        [DisplayName("Recived By Name"), Expression("jRecivedBy.[Name]")]
        public String RecivedByName
        {
            get => fields.RecivedByName[this];
            set => fields.RecivedByName[this] = value;
        }

        [DisplayName("Recived By Address Prmanent"), Expression("jRecivedBy.[Address_Prmanent]")]
        public String RecivedByAddressPrmanent
        {
            get => fields.RecivedByAddressPrmanent[this];
            set => fields.RecivedByAddressPrmanent[this] = value;
        }

        [DisplayName("Recived By Address Present"), Expression("jRecivedBy.[Address_Present]")]
        public String RecivedByAddressPresent
        {
            get => fields.RecivedByAddressPresent[this];
            set => fields.RecivedByAddressPresent[this] = value;
        }

        [DisplayName("Recived By Nid"), Expression("jRecivedBy.[NID]")]
        public String RecivedByNid
        {
            get => fields.RecivedByNid[this];
            set => fields.RecivedByNid[this] = value;
        }

        [DisplayName("Recived By Phone Number"), Expression("jRecivedBy.[PhoneNumber]")]
        public String RecivedByPhoneNumber
        {
            get => fields.RecivedByPhoneNumber[this];
            set => fields.RecivedByPhoneNumber[this] = value;
        }

        [DisplayName("Recived By Email"), Expression("jRecivedBy.[Email]")]
        public String RecivedByEmail
        {
            get => fields.RecivedByEmail[this];
            set => fields.RecivedByEmail[this] = value;
        }

        [DisplayName("Recived By Designation Id"), Expression("jRecivedBy.[Designation_Id]")]
        public Int32? RecivedByDesignationId
        {
            get => fields.RecivedByDesignationId[this];
            set => fields.RecivedByDesignationId[this] = value;
        }

        [DisplayName("Recived By Attachment"), Expression("jRecivedBy.[Attachment]")]
        public String RecivedByAttachment
        {
            get => fields.RecivedByAttachment[this];
            set => fields.RecivedByAttachment[this] = value;
        }

        [DisplayName("Recived By Is Active"), Expression("jRecivedBy.[Is_Active]")]
        public Boolean? RecivedByIsActive
        {
            get => fields.RecivedByIsActive[this];
            set => fields.RecivedByIsActive[this] = value;
        }

        [DisplayName("Recived By Joining Date"), Expression("jRecivedBy.[Joining_Date]")]
        public DateTime? RecivedByJoiningDate
        {
            get => fields.RecivedByJoiningDate[this];
            set => fields.RecivedByJoiningDate[this] = value;
        }

        [DisplayName("Recived By I User"), Expression("jRecivedBy.[IUser]")]
        public Int64? RecivedByIUser
        {
            get => fields.RecivedByIUser[this];
            set => fields.RecivedByIUser[this] = value;
        }

        [DisplayName("Recived By I Date"), Expression("jRecivedBy.[IDate]")]
        public DateTime? RecivedByIDate
        {
            get => fields.RecivedByIDate[this];
            set => fields.RecivedByIDate[this] = value;
        }

        [DisplayName("Recived By E User"), Expression("jRecivedBy.[EUser]")]
        public Int64? RecivedByEUser
        {
            get => fields.RecivedByEUser[this];
            set => fields.RecivedByEUser[this] = value;
        }

        [DisplayName("Recived By E Date"), Expression("jRecivedBy.[EDate]")]
        public DateTime? RecivedByEDate
        {
            get => fields.RecivedByEDate[this];
            set => fields.RecivedByEDate[this] = value;
        }

        public BillRow()
            : base()
        {
        }

        public BillRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int64Field Id;
            public Int64Field CustomerId;
            public DecimalField BillAmount;
            public Int32Field MonthId;
            public DateTimeField PaymentDate;
            public Int64Field RecivedBy;
            public StringField Description;
            public Int64Field IUser;
            public DateTimeField IDate;
            public Int64Field EUser;
            public DateTimeField EDate;

            public StringField CustomerCustomerIdentity;
            public StringField CustomerName;
            public StringField CustomerAddress;
            public Int32Field CustomerAreaId;
            public StringField CustomerNid;
            public StringField CustomerPhoneNumber1;
            public StringField CustomerPhoneNumber2;
            public StringField CustomerEmail;
            public StringField CustomerAttachment;
            public BooleanField CustomerIsActive;
            public DateTimeField CustomerConnectionDate;
            public Int64Field CustomerIUser;
            public DateTimeField CustomerIDate;
            public Int64Field CustomerEUser;
            public DateTimeField CustomerEDate;

            public StringField MonthName;
            public Int32Field MonthSortingOrder;
            public Int64Field MonthIUser;
            public DateTimeField MonthIDate;
            public Int64Field MonthEUser;
            public DateTimeField MonthEDate;

            public StringField RecivedByEmployeeIdentity;
            public StringField RecivedByName;
            public StringField RecivedByAddressPrmanent;
            public StringField RecivedByAddressPresent;
            public StringField RecivedByNid;
            public StringField RecivedByPhoneNumber;
            public StringField RecivedByEmail;
            public Int32Field RecivedByDesignationId;
            public StringField RecivedByAttachment;
            public BooleanField RecivedByIsActive;
            public DateTimeField RecivedByJoiningDate;
            public Int64Field RecivedByIUser;
            public DateTimeField RecivedByIDate;
            public Int64Field RecivedByEUser;
            public DateTimeField RecivedByEDate;
        }
    }
}
