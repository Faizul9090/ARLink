namespace ARLink.Default {
    export interface ExpenditureRow {
        Id?: number;
        Name?: string;
        EmployeeId?: number;
        MonthId?: number;
        ExpenditureDate?: string;
        Description?: string;
        IUser?: number;
        IDate?: string;
        EUser?: number;
        EDate?: string;
        EmployeeEmployeeIdentity?: string;
        EmployeeName?: string;
        EmployeeAddressPrmanent?: string;
        EmployeeAddressPresent?: string;
        EmployeeNid?: string;
        EmployeePhoneNumber?: string;
        EmployeeEmail?: string;
        EmployeeDesignationId?: number;
        EmployeeAttachment?: string;
        EmployeeIsActive?: boolean;
        EmployeeJoiningDate?: string;
        EmployeeIUser?: number;
        EmployeeIDate?: string;
        EmployeeEUser?: number;
        EmployeeEDate?: string;
        MonthName?: string;
        MonthSortingOrder?: number;
        MonthIUser?: number;
        MonthIDate?: string;
        MonthEUser?: number;
        MonthEDate?: string;
    }

    export namespace ExpenditureRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Expenditure';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            EmployeeId = "EmployeeId",
            MonthId = "MonthId",
            ExpenditureDate = "ExpenditureDate",
            Description = "Description",
            IUser = "IUser",
            IDate = "IDate",
            EUser = "EUser",
            EDate = "EDate",
            EmployeeEmployeeIdentity = "EmployeeEmployeeIdentity",
            EmployeeName = "EmployeeName",
            EmployeeAddressPrmanent = "EmployeeAddressPrmanent",
            EmployeeAddressPresent = "EmployeeAddressPresent",
            EmployeeNid = "EmployeeNid",
            EmployeePhoneNumber = "EmployeePhoneNumber",
            EmployeeEmail = "EmployeeEmail",
            EmployeeDesignationId = "EmployeeDesignationId",
            EmployeeAttachment = "EmployeeAttachment",
            EmployeeIsActive = "EmployeeIsActive",
            EmployeeJoiningDate = "EmployeeJoiningDate",
            EmployeeIUser = "EmployeeIUser",
            EmployeeIDate = "EmployeeIDate",
            EmployeeEUser = "EmployeeEUser",
            EmployeeEDate = "EmployeeEDate",
            MonthName = "MonthName",
            MonthSortingOrder = "MonthSortingOrder",
            MonthIUser = "MonthIUser",
            MonthIDate = "MonthIDate",
            MonthEUser = "MonthEUser",
            MonthEDate = "MonthEDate"
        }
    }
}
