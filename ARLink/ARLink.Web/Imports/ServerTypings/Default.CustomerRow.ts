namespace ARLink.Default {
    export interface CustomerRow {
        Id?: number;
        LookupText?: string;
        CustomerIdentity?: string;
        Name?: string;
        Address?: string;
        AreaId?: number;
        Nid?: string;
        PhoneNumber1?: string;
        PhoneNumber2?: string;
        Email?: string;
        Attachment?: string;
        IsActive?: boolean;
        ConnectionDate?: string;
        PackageId?: number;
        IUser?: number;
        IDate?: string;
        EUser?: number;
        EDate?: string;
        AreaName?: string;
        AreaSortingOrder?: number;
        AreaIUser?: number;
        AreaIDate?: string;
        AreaEUser?: number;
        AreaEDate?: string;
        PackageName?: string;
        PackageAmount?: number;
        PackageDescription?: string;
        PackageIUser?: number;
        PackageIDate?: string;
        PackageEUser?: number;
        PackageEDate?: string;
    }

    export namespace CustomerRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CustomerIdentity';
        export const localTextPrefix = 'Default.Customer';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            LookupText = "LookupText",
            CustomerIdentity = "CustomerIdentity",
            Name = "Name",
            Address = "Address",
            AreaId = "AreaId",
            Nid = "Nid",
            PhoneNumber1 = "PhoneNumber1",
            PhoneNumber2 = "PhoneNumber2",
            Email = "Email",
            Attachment = "Attachment",
            IsActive = "IsActive",
            ConnectionDate = "ConnectionDate",
            PackageId = "PackageId",
            IUser = "IUser",
            IDate = "IDate",
            EUser = "EUser",
            EDate = "EDate",
            AreaName = "AreaName",
            AreaSortingOrder = "AreaSortingOrder",
            AreaIUser = "AreaIUser",
            AreaIDate = "AreaIDate",
            AreaEUser = "AreaEUser",
            AreaEDate = "AreaEDate",
            PackageName = "PackageName",
            PackageAmount = "PackageAmount",
            PackageDescription = "PackageDescription",
            PackageIUser = "PackageIUser",
            PackageIDate = "PackageIDate",
            PackageEUser = "PackageEUser",
            PackageEDate = "PackageEDate"
        }
    }
}
