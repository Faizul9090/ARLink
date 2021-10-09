
namespace ARLink.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ExpenditureDialog extends Serenity.EntityDialog<ExpenditureRow, any> {
        protected getFormKey() { return ExpenditureForm.formKey; }
        protected getIdProperty() { return ExpenditureRow.idProperty; }
        protected getLocalTextPrefix() { return ExpenditureRow.localTextPrefix; }
        protected getNameProperty() { return ExpenditureRow.nameProperty; }
        protected getService() { return ExpenditureService.baseUrl; }
        protected getDeletePermission() { return ExpenditureRow.deletePermission; }
        protected getInsertPermission() { return ExpenditureRow.insertPermission; }
        protected getUpdatePermission() { return ExpenditureRow.updatePermission; }

        protected form = new ExpenditureForm(this.idPrefix);

    }
}