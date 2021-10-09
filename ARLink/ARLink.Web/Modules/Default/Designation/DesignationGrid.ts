
namespace ARLink.Default {

    @Serenity.Decorators.registerClass()
    export class DesignationGrid extends Serenity.EntityGrid<DesignationRow, any> {
        protected getColumnsKey() { return DesignationColumns.columnsKey; }
        protected getDialogType() { return DesignationDialog; }
        protected getIdProperty() { return DesignationRow.idProperty; }
        protected getInsertPermission() { return DesignationRow.insertPermission; }
        protected getLocalTextPrefix() { return DesignationRow.localTextPrefix; }
        protected getService() { return DesignationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}