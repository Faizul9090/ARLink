namespace ARLink.Default {
    export interface PackageRow {
        Id?: number;
        Name?: string;
        Amount?: number;
        Description?: string;
        IUser?: number;
        IDate?: string;
        EUser?: number;
        EDate?: string;
    }

    export namespace PackageRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Package';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            Amount = "Amount",
            Description = "Description",
            IUser = "IUser",
            IDate = "IDate",
            EUser = "EUser",
            EDate = "EDate"
        }
    }
}
