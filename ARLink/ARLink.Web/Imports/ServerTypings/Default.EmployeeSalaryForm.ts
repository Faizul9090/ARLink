namespace ARLink.Default {
    export interface EmployeeSalaryForm {
        EmployeeId: Serenity.LookupEditor;
        Amount: Serenity.DecimalEditor;
        MonthId: Serenity.LookupEditor;
        PaymentDate: Serenity.DateEditor;
        Description: Serenity.StringEditor;
        IUser: Serenity.StringEditor;
        IDate: Serenity.DateEditor;
        EUser: Serenity.StringEditor;
        EDate: Serenity.DateEditor;
    }

    export class EmployeeSalaryForm extends Serenity.PrefixedContext {
        static formKey = 'Default.EmployeeSalary';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeeSalaryForm.init)  {
                EmployeeSalaryForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;
                var w3 = s.StringEditor;

                Q.initFormType(EmployeeSalaryForm, [
                    'EmployeeId', w0,
                    'Amount', w1,
                    'MonthId', w0,
                    'PaymentDate', w2,
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
