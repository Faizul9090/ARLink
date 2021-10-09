namespace ARLink.Default {
    export interface PackageForm {
        Name: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
        IUser: Serenity.StringEditor;
        IDate: Serenity.DateEditor;
        EUser: Serenity.StringEditor;
        EDate: Serenity.DateEditor;
    }

    export class PackageForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Package';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PackageForm.init)  {
                PackageForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.TextAreaEditor;
                var w3 = s.DateEditor;

                Q.initFormType(PackageForm, [
                    'Name', w0,
                    'Amount', w1,
                    'Description', w2,
                    'IUser', w0,
                    'IDate', w3,
                    'EUser', w0,
                    'EDate', w3
                ]);
            }
        }
    }
}
