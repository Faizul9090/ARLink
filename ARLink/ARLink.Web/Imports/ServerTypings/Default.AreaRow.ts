namespace ARLink.Default {
    export interface AreaRow {
        Id?: number;
        Name?: string;
        SortingOrder?: number;
        IUser?: number;
        IDate?: string;
        EUser?: number;
        EDate?: string;
    }

    export namespace AreaRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Area';
        export const lookupKey = 'Default.Area';

        export function getLookup(): Q.Lookup<AreaRow> {
            return Q.getLookup<AreaRow>('Default.Area');
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
