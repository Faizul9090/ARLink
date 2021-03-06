
namespace ARLink.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class AreaDialog extends Serenity.EntityDialog<AreaRow, any> {
        protected getFormKey() { return AreaForm.formKey; }
        protected getIdProperty() { return AreaRow.idProperty; }
        protected getLocalTextPrefix() { return AreaRow.localTextPrefix; }
        protected getNameProperty() { return AreaRow.nameProperty; }
        protected getService() { return AreaService.baseUrl; }
        protected getDeletePermission() { return AreaRow.deletePermission; }
        protected getInsertPermission() { return AreaRow.insertPermission; }
        protected getUpdatePermission() { return AreaRow.updatePermission; }

        protected form = new AreaForm(this.idPrefix);

    }
}