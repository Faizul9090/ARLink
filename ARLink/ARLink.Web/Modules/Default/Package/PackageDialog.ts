
namespace ARLink.Default {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class PackageDialog extends Serenity.EntityDialog<PackageRow, any> {
        protected getFormKey() { return PackageForm.formKey; }
        protected getIdProperty() { return PackageRow.idProperty; }
        protected getLocalTextPrefix() { return PackageRow.localTextPrefix; }
        protected getNameProperty() { return PackageRow.nameProperty; }
        protected getService() { return PackageService.baseUrl; }
        protected getDeletePermission() { return PackageRow.deletePermission; }
        protected getInsertPermission() { return PackageRow.insertPermission; }
        protected getUpdatePermission() { return PackageRow.updatePermission; }

        protected form = new PackageForm(this.idPrefix);

    }
}