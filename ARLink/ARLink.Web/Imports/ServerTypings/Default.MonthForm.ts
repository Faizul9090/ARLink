namespace ARLink.Default {
    export interface MonthForm {
        Name: Serenity.StringEditor;
        SortingOrder: Serenity.IntegerEditor;
        IUser: Serenity.StringEditor;
        IDate: Serenity.DateEditor;
        EUser: Serenity.StringEditor;
        EDate: Serenity.DateEditor;
    }

    export class MonthForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Month';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MonthForm.init)  {
                MonthForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(MonthForm, [
                    'Name', w0,
                    'SortingOrder', w1,
                    'IUser', w0,
                    'IDate', w2,
                    'EUser', w0,
                    'EDate', w2
                ]);
            }
        }
    }
}
