
namespace ARLink.Default {

    @Serenity.Decorators.registerClass()
    export class EmployeeSalaryGrid extends Serenity.EntityGrid<EmployeeSalaryRow, any> {
        protected getColumnsKey() { return EmployeeSalaryColumns.columnsKey; }
        protected getDialogType() { return EmployeeSalaryDialog; }
        protected getIdProperty() { return EmployeeSalaryRow.idProperty; }
        protected getInsertPermission() { return EmployeeSalaryRow.insertPermission; }
        protected getLocalTextPrefix() { return EmployeeSalaryRow.localTextPrefix; }
        protected getService() { return EmployeeSalaryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}