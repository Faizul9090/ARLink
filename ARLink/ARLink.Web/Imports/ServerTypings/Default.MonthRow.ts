namespace ARLink.Default {
    export interface MonthRow {
        Id?: number;
        Name?: string;
        SortingOrder?: number;
        IUser?: number;
        IDate?: string;
        EUser?: number;
        EDate?: string;
    }

    export namespace MonthRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Default.Month';
        export const lookupKey = 'Default.Month';

        export function getLookup(): Q.Lookup<MonthRow> {
            return Q.getLookup<MonthRow>('Default.Month');
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
