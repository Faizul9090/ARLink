namespace ARLink.Default {
    export interface EmployeeForm {
        EmployeeIdentity: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        AddressPrmanent: Serenity.TextAreaEditor;
        AddressPresent: Serenity.TextAreaEditor;
        Nid: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        DesignationId: Serenity.LookupEditor;
        Attachment: Serenity.ImageUploadEditor;
        IsActive: Serenity.BooleanEditor;
        JoiningDate: Serenity.DateEditor;
        IUser: Serenity.StringEditor;
        IDate: Serenity.DateEditor;
        EUser: Serenity.StringEditor;
        EDate: Serenity.DateEditor;
    }

    export class EmployeeForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Employee';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeForm.init)  {
                EmployeeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.LookupEditor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.BooleanEditor;
                var w5 = s.DateEditor;

                Q.initFormType(EmployeeForm, [
                    'EmployeeIdentity', w0,
                    'Name', w0,
                    'AddressPrmanent', w1,
                    'AddressPresent', w1,
                    'Nid', w0,
                    'PhoneNumber', w0,
                    'Email', w0,
                    'DesignationId', w2,
                    'Attachment', w3,
                    'IsActive', w4,
                    'JoiningDate', w5,
                    'IUser', w0,
                    'IDate', w5,
                    'EUser', w0,
                    'EDate', w5
                ]);
            }
        }
    }
}
