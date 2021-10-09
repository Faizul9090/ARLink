
namespace ARLink.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class EmployeeSalaryDialog extends Serenity.EntityDialog<EmployeeSalaryRow, any> {
        protected getFormKey() { return EmployeeSalaryForm.formKey; }
        protected getIdProperty() { return EmployeeSalaryRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeeSalaryRow.localTextPrefix; }
        protected getNameProperty() { return EmployeeSalaryRow.nameProperty; }
        protected getService() { return EmployeeSalaryService.baseUrl; }
        protected getDeletePermission() { return EmployeeSalaryRow.deletePermission; }
        protected getInsertPermission() { return EmployeeSalaryRow.insertPermission; }
        protected getUpdatePermission() { return EmployeeSalaryRow.updatePermission; }

        protected form = new EmployeeSalaryForm(this.idPrefix);

    }
}