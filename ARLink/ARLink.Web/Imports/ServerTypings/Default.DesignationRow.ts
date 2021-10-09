namespace ARLink.Default {
    export interface DesignationRow {
        Id?: number;
        Name?: string;
        SortingOrder?: number;
        IUser?: number;
        IDate?: string;
        EUser?: number;
        EDate?: string;
    }

    export namespace DesignationRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Designation';
        export const lookupKey = 'Default.Designation';

        export function getLookup(): Q.Lookup<DesignationRow> {
            return Q.getLookup<DesignationRow>('Default.Designation');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            Id = "Id",
            Name = "Name",
            SortingOrder = "SortingOrder",
            IUser = "IUser",
            IDate = "IDate",
            EUser = "EUser",
            EDate = "EDate"
        }
    }
}
