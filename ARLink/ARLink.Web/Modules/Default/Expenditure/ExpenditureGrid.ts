
namespace ARLink.Default {

    @Serenity.Decorators.registerClass()
    export class ExpenditureGrid extends Serenity.EntityGrid<ExpenditureRow, any> {
        protected getColumnsKey() { return ExpenditureColumns.columnsKey; }
        protected getDialogType() { return ExpenditureDialog; }
        protected getIdProperty() { return ExpenditureRow.idProperty; }
        protected getInsertPermission() { return ExpenditureRow.insertPermission; }
        protected getLocalTextPrefix() { return ExpenditureRow.localTextPrefix; }
        protected getService() { return ExpenditureService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}