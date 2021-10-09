namespace ARLink.Default {
    export interface BillForm {
        CustomerId: Serenity.LookupEditor;
        BillAmount: Serenity.DecimalEditor;
        MonthId: Serenity.LookupEditor;
        PaymentDate: Serenity.DateEditor;
        RecivedBy: Serenity.LookupEditor;
        Description: Serenity.StringEditor;
        IUser: Serenity.StringEditor;
        IDate: Serenity.DateEditor;
        EUser: Serenity.StringEditor;
        EDate: Serenity.DateEditor;
    }

    export class BillForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Bill';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BillForm.init)  {
                BillForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;
                var w3 = s.StringEditor;

                Q.initFormType(BillForm, [
                    'CustomerId', w0,
                    'BillAmount', w1,
                    'MonthId', w0,
                    'PaymentDate', w2,
                    'RecivedBy', w0,
                    'Description', w3,
                    'IUser', w3,
                    'IDate', w2,
                    'EUser', w3,
                    'EDate', w2
                ]);
            }
        }
    }
}
