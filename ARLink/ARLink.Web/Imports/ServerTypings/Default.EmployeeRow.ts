namespace ARLink.Default {
    export interface EmployeeRow {
        Id?: number;
        LookupText?: string;
        EmployeeIdentity?: string;
        Name?: string;
        AddressPrmanent?: string;
        AddressPresent?: string;
        Nid?: string;
        PhoneNumber?: string;
        Email?: string;
        DesignationId?: number;
        Attachment?: string;
        IsActive?: boolean;
        JoiningDate?: string;
        IUser?: number;
        IDate?: string;
        EUser?: number;
        EDate?: string;
        DesignationName?: string;
        DesignationSortingOrder?: number;
        DesignationIUser?: number;
        DesignationIDate?: string;
        DesignationEUser?: number;
        DesignationEDate?: string;
    }

    export namespace EmployeeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'EmployeeIdentity';
        export const localTextPrefix = 'Default.Employee';
        export const lookupKey = 'Default.Employee';

        export function getLookup(): Q.Lookup<EmployeeRow> {
            return Q.getLookup<EmployeeRow>('Default.Employee');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            LookupText = "LookupText",
            EmployeeIdentity = "EmployeeIdentity",
            Name = "Name",
            AddressPrmanent = "AddressPrmanent",
            AddressPresent = "AddressPresent",
            Nid = "Nid",
            PhoneNumber = "PhoneNumber",
            Email = "Email",
            DesignationId = "DesignationId",
            Attachment = "Attachment",
            IsActive = "IsActive",
            JoiningDate = "JoiningDate",
            IUser = "IUser",
            IDate = "IDate",
            EUser = "EUser",
            EDate = "EDate",
            DesignationName = "DesignationName",
            DesignationSortingOrder = "DesignationSortingOrder",
            DesignationIUser = "DesignationIUser",
            DesignationIDate = "DesignationIDate",
            DesignationEUser = "DesignationEUser",
            DesignationEDate = "DesignationEDate"
        }
    }
}
