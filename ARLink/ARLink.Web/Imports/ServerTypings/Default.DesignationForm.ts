namespace ARLink.Default {
    export interface DesignationForm {
        Name: Serenity.StringEditor;
        SortingOrder: Serenity.IntegerEditor;
        IUser: Serenity.StringEditor;
        IDate: Serenity.DateEditor;
        EUser: Serenity.StringEditor;
        EDate: Serenity.DateEditor;
    }

    export class DesignationForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Designation';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DesignationForm.init)  {
                DesignationForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(DesignationForm, [
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
