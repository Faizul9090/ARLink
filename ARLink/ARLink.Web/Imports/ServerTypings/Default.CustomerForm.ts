namespace ARLink.Default {
    export interface CustomerForm {
        CustomerIdentity: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        AreaId: Serenity.IntegerEditor;
        Nid: Serenity.StringEditor;
        PhoneNumber1: Serenity.StringEditor;
        PhoneNumber2: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Attachment: Serenity.ImageUploadEditor;
        IsActive: Serenity.BooleanEditor;
        ConnectionDate: Serenity.DateEditor;
        PackageId: Serenity.IntegerEditor;
        IUser: Serenity.StringEditor;
        IDate: Serenity.DateEditor;
        EUser: Serenity.StringEditor;
        EDate: Serenity.DateEditor;
    }

    export class CustomerForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Customer';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerForm.init)  {
                CustomerForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.TextAreaEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.ImageUploadEditor;
                var w4 = s.BooleanEditor;
                var w5 = s.DateEditor;

                Q.initFormType(CustomerForm, [
                    'CustomerIdentity', w0,
                    'Name', w0,
                    'Address', w1,
                    'AreaId', w2,
                    'Nid', w0,
                    'PhoneNumber1', w0,
                    'PhoneNumber2', w0,
                    'Email', w0,
                    'Attachment', w3,
                    'IsActive', w4,
                    'ConnectionDate', w5,
                    'PackageId', w2,
                    'IUser', w0,
                    'IDate', w5,
                    'EUser', w0,
                    'EDate', w5
                ]);
            }
        }
    }
}
