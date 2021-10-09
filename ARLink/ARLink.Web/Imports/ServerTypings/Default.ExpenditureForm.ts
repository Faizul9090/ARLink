namespace ARLink.Default {
    export interface ExpenditureForm {
        Name: Serenity.StringEditor;
        EmployeeId: Serenity.LookupEditor;
        MonthId: Serenity.LookupEditor;
        ExpenditureDate: Serenity.DateEditor;
        Description: Serenity.StringEditor;
        IUser: Serenity.StringEditor;
        IDate: Serenity.DateEditor;
        EUser: Serenity.StringEditor;
        EDate: Serenity.DateEditor;
    }

    export class ExpenditureForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Expenditure';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExpenditureForm.init)  {
                ExpenditureForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;

                Q.initFormType(ExpenditureForm, [
                    'Name', w0,
                    'EmployeeId', w1,
                    'MonthId', w1,
                    'ExpenditureDate', w2,
                    'Description', w0,
                    'IUser', w0,
                    'IDate', w2,
                    'EUser', w0,
                    'EDate', w2
                ]);
            }
        }
    }
}
