namespace ARLink.Default {
    export interface BillRow {
        Id?: number;
        CustomerId?: number;
        BillAmount?: number;
        MonthId?: number;
        PaymentDate?: string;
        RecivedBy?: number;
        Description?: string;
        IUser?: number;
        IDate?: string;
        EUser?: number;
        EDate?: string;
        CustomerCustomerIdentity?: string;
        CustomerName?: string;
        CustomerAddress?: string;
        CustomerAreaId?: number;
        CustomerNid?: string;
        CustomerPhoneNumber1?: string;
        CustomerPhoneNumber2?: string;
        CustomerEmail?: string;
        CustomerAttachment?: string;
        CustomerIsActive?: boolean;
        CustomerConnectionDate?: string;
        CustomerIUser?: number;
        CustomerIDate?: string;
        CustomerEUser?: number;
        CustomerEDate?: string;
        MonthName?: string;
        MonthSortingOrder?: number;
        MonthIUser?: number;
        MonthIDate?: string;
        MonthEUser?: number;
        MonthEDate?: string;
        RecivedByEmployeeIdentity?: string;
        RecivedByName?: string;
        RecivedByAddressPrmanent?: string;
        RecivedByAddressPresent?: string;
        RecivedByNid?: string;
        RecivedByPhoneNumber?: string;
        RecivedByEmail?: string;
        RecivedByDesignationId?: number;
        RecivedByAttachment?: string;
        RecivedByIsActive?: boolean;
        RecivedByJoiningDate?: string;
        RecivedByIUser?: number;
        RecivedByIDate?: string;
        RecivedByEUser?: number;
        RecivedByEDate?: string;
    }

    export namespace BillRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'Default.Bill';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            BillAmount = "BillAmount",
            MonthId = "MonthId",
            PaymentDate = "PaymentDate",
            RecivedBy = "RecivedBy",
            Description = "Description",
            IUser = "IUser",
            IDate = "IDate",
            EUser = "EUser",
            EDate = "EDate",
            CustomerCustomerIdentity = "CustomerCustomerIdentity",
            CustomerName = "CustomerName",
            CustomerAddress = "CustomerAddress",
            CustomerAreaId = "CustomerAreaId",
            CustomerNid = "CustomerNid",
            CustomerPhoneNumber1 = "CustomerPhoneNumber1",
            CustomerPhoneNumber2 = "CustomerPhoneNumber2",
            CustomerEmail = "CustomerEmail",
            CustomerAttachment = "CustomerAttachment",
            CustomerIsActive = "CustomerIsActive",
            CustomerConnectionDate = "CustomerConnectionDate",
            CustomerIUser = "CustomerIUser",
            CustomerIDate = "CustomerIDate",
            CustomerEUser = "CustomerEUser",
            CustomerEDate = "CustomerEDate",
            MonthName = "MonthName",
            MonthSortingOrder = "MonthSortingOrder",
            MonthIUser = "MonthIUser",
            MonthIDate = "MonthIDate",
            MonthEUser = "MonthEUser",
            MonthEDate = "MonthEDate",
            RecivedByEmployeeIdentity = "RecivedByEmployeeIdentity",
            RecivedByName = "RecivedByName",
            RecivedByAddressPrmanent = "RecivedByAddressPrmanent",
            RecivedByAddressPresent = "RecivedByAddressPresent",
            RecivedByNid = "RecivedByNid",
            RecivedByPhoneNumber = "RecivedByPhoneNumber",
            RecivedByEmail = "RecivedByEmail",
            RecivedByDesignationId = "RecivedByDesignationId",
            RecivedByAttachment = "RecivedByAttachment",
            RecivedByIsActive = "RecivedByIsActive",
            RecivedByJoiningDate = "RecivedByJoiningDate",
            RecivedByIUser = "RecivedByIUser",
            RecivedByIDate = "RecivedByIDate",
            RecivedByEUser = "RecivedByEUser",
            RecivedByEDate = "RecivedByEDate"
        }
    }
}
