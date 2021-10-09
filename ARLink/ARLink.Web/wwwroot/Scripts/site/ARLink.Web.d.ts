/// <reference types="serenity.corelib" />
/// <reference types="jquery" />
/// <reference types="jquery.blockui" />
/// <reference types="jquery.validation" />
/// <reference types="jqueryui" />
/// <reference types="serenity.pro.ui" />
/// <reference types="serenity.pro.extensions" />
declare namespace ARLink.Administration {
    class LanguageColumns {
        static columnsKey: string;
    }
}
declare namespace ARLink.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ARLink.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace ARLink.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace ARLink.Administration {
}
declare namespace ARLink.Administration {
    class RoleColumns {
        static columnsKey: string;
    }
}
declare namespace ARLink.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ARLink.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace ARLink.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace ARLink.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace ARLink.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace ARLink.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace ARLink.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace ARLink.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace ARLink.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace ARLink.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace ARLink.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace ARLink.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace ARLink.Administration {
    class UserColumns {
        static columnsKey: string;
    }
}
declare namespace ARLink.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ARLink.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace ARLink.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace ARLink.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace ARLink.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace ARLink.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace ARLink.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace ARLink.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace ARLink.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace ARLink.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace ARLink.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace ARLink.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace ARLink.Default {
    class AreaColumns {
        static columnsKey: string;
    }
}
declare namespace ARLink.Default {
    interface AreaForm {
        Name: Serenity.StringEditor;
        SortingOrder: Serenity.IntegerEditor;
        IUser: Serenity.StringEditor;
        IDate: Serenity.DateEditor;
        EUser: Serenity.StringEditor;
        EDate: Serenity.DateEditor;
    }
    class AreaForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ARLink.Default {
    interface AreaRow {
        Id?: number;
        Name?: string;
        SortingOrder?: number;
        IUser?: number;
        IDate?: string;
        EUser?: number;
        EDate?: string;
    }
    namespace AreaRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Area";
        const lookupKey = "Default.Area";
        function getLookup(): Q.Lookup<AreaRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            SortingOrder = "SortingOrder",
            IUser = "IUser",
            IDate = "IDate",
            EUser = "EUser",
            EDate = "EDate"
        }
    }
}
declare namespace ARLink.Default {
    namespace AreaService {
        const baseUrl = "Default/Area";
        function Create(request: Serenity.SaveRequest<AreaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AreaRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AreaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AreaRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Area/Create",
            Update = "Default/Area/Update",
            Delete = "Default/Area/Delete",
            Retrieve = "Default/Area/Retrieve",
            List = "Default/Area/List"
        }
    }
}
declare namespace ARLink.Default {
    class BillColumns {
        static columnsKey: string;
    }
}
declare namespace ARLink.Default {
    interface BillForm {
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
    class BillForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ARLink.Default {
    interface BillRow {
        Id?: number;
        CustomerId?: number;
        BillAmount?: number;
        MonthId?: number;
        PaymentDate?: string;
        RecivedBy?: number;
        Description?: string;
        IUser?: number;
        IDate?: string;
        EUser?: number;
        EDate?: string;
        CustomerCustomerIdentity?: string;
        CustomerName?: string;
        CustomerAddress?: string;
        CustomerAreaId?: number;
        CustomerNid?: string;
        CustomerPhoneNumber1?: string;
        CustomerPhoneNumber2?: string;
        CustomerEmail?: string;
        CustomerAttachment?: string;
        CustomerIsActive?: boolean;
        CustomerConnectionDate?: string;
        CustomerIUser?: number;
        CustomerIDate?: string;
        CustomerEUser?: number;
        CustomerEDate?: string;
        MonthName?: string;
        MonthSortingOrder?: number;
        MonthIUser?: number;
        MonthIDate?: string;
        MonthEUser?: number;
        MonthEDate?: string;
        RecivedByEmployeeIdentity?: string;
        RecivedByName?: string;
        RecivedByAddressPrmanent?: string;
        RecivedByAddressPresent?: string;
        RecivedByNid?: string;
        RecivedByPhoneNumber?: string;
        RecivedByEmail?: string;
        RecivedByDesignationId?: number;
        RecivedByAttachment?: string;
        RecivedByIsActive?: boolean;
        RecivedByJoiningDate?: string;
        RecivedByIUser?: number;
        RecivedByIDate?: string;
        RecivedByEUser?: number;
        RecivedByEDate?: string;
    }
    namespace BillRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "Default.Bill";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            BillAmount = "BillAmount",
            MonthId = "MonthId",
            PaymentDate = "PaymentDate",
            RecivedBy = "RecivedBy",
            Description = "Description",
            IUser = "IUser",
            IDate = "IDate",
            EUser = "EUser",
            EDate = "EDate",
            CustomerCustomerIdentity = "CustomerCustomerIdentity",
            CustomerName = "CustomerName",
            CustomerAddress = "CustomerAddress",
            CustomerAreaId = "CustomerAreaId",
            CustomerNid = "CustomerNid",
            CustomerPhoneNumber1 = "CustomerPhoneNumber1",
            CustomerPhoneNumber2 = "CustomerPhoneNumber2",
            CustomerEmail = "CustomerEmail",
            CustomerAttachment = "CustomerAttachment",
            CustomerIsActive = "CustomerIsActive",
            CustomerConnectionDate = "CustomerConnectionDate",
            CustomerIUser = "CustomerIUser",
            CustomerIDate = "CustomerIDate",
            CustomerEUser = "CustomerEUser",
            CustomerEDate = "CustomerEDate",
            MonthName = "MonthName",
            MonthSortingOrder = "MonthSortingOrder",
            MonthIUser = "MonthIUser",
            MonthIDate = "MonthIDate",
            MonthEUser = "MonthEUser",
            MonthEDate = "MonthEDate",
            RecivedByEmployeeIdentity = "RecivedByEmployeeIdentity",
            RecivedByName = "RecivedByName",
            RecivedByAddressPrmanent = "RecivedByAddressPrmanent",
            RecivedByAddressPresent = "RecivedByAddressPresent",
            RecivedByNid = "RecivedByNid",
            RecivedByPhoneNumber = "RecivedByPhoneNumber",
            RecivedByEmail = "RecivedByEmail",
            RecivedByDesignationId = "RecivedByDesignationId",
            RecivedByAttachment = "RecivedByAttachment",
            RecivedByIsActive = "RecivedByIsActive",
            RecivedByJoiningDate = "RecivedByJoiningDate",
            RecivedByIUser = "RecivedByIUser",
            RecivedByIDate = "RecivedByIDate",
            RecivedByEUser = "RecivedByEUser",
            RecivedByEDate = "RecivedByEDate"
        }
    }
}
declare namespace ARLink.Default {
    namespace BillService {
        const baseUrl = "Default/Bill";
        function Create(request: Serenity.SaveRequest<BillRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<BillRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<BillRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<BillRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Bill/Create",
            Update = "Default/Bill/Update",
            Delete = "Default/Bill/Delete",
            Retrieve = "Default/Bill/Retrieve",
            List = "Default/Bill/List"
        }
    }
}
declare namespace ARLink.Default {
    class CustomerColumns {
        static columnsKey: string;
    }
}
declare namespace ARLink.Default {
    interface CustomerForm {
        CustomerIdentity: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Address: Serenity.TextAreaEditor;
        AreaId: Serenity.IntegerEditor;
        Nid: Serenity.StringEditor;
        PhoneNumber1: Serenity.StringEditor;
        PhoneNumber2: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Attachment: Serenity.ImageUploadEditor;
        IsActive: Serenity.BooleanEditor;
        ConnectionDate: Serenity.DateEditor;
        PackageId: Serenity.IntegerEditor;
        IUser: Serenity.StringEditor;
        IDate: Serenity.DateEditor;
        EUser: Serenity.StringEditor;
        EDate: Serenity.DateEditor;
    }
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ARLink.Default {
    interface CustomerRow {
        Id?: number;
        LookupText?: string;
        CustomerIdentity?: string;
        Name?: string;
        Address?: string;
        AreaId?: number;
        Nid?: string;
        PhoneNumber1?: string;
        PhoneNumber2?: string;
        Email?: string;
        Attachment?: string;
        IsActive?: boolean;
        ConnectionDate?: string;
        PackageId?: number;
        IUser?: number;
        IDate?: string;
        EUser?: number;
        EDate?: string;
        AreaName?: string;
        AreaSortingOrder?: number;
        AreaIUser?: number;
        AreaIDate?: string;
        AreaEUser?: number;
        AreaEDate?: string;
        PackageName?: string;
        PackageAmount?: number;
        PackageDescription?: string;
        PackageIUser?: number;
        PackageIDate?: string;
        PackageEUser?: number;
        PackageEDate?: string;
    }
    namespace CustomerRow {
        const idProperty = "Id";
        const nameProperty = "CustomerIdentity";
        const localTextPrefix = "Default.Customer";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            LookupText = "LookupText",
            CustomerIdentity = "CustomerIdentity",
            Name = "Name",
            Address = "Address",
            AreaId = "AreaId",
            Nid = "Nid",
            PhoneNumber1 = "PhoneNumber1",
            PhoneNumber2 = "PhoneNumber2",
            Email = "Email",
            Attachment = "Attachment",
            IsActive = "IsActive",
            ConnectionDate = "ConnectionDate",
            PackageId = "PackageId",
            IUser = "IUser",
            IDate = "IDate",
            EUser = "EUser",
            EDate = "EDate",
            AreaName = "AreaName",
            AreaSortingOrder = "AreaSortingOrder",
            AreaIUser = "AreaIUser",
            AreaIDate = "AreaIDate",
            AreaEUser = "AreaEUser",
            AreaEDate = "AreaEDate",
            PackageName = "PackageName",
            PackageAmount = "PackageAmount",
            PackageDescription = "PackageDescription",
            PackageIUser = "PackageIUser",
            PackageIDate = "PackageIDate",
            PackageEUser = "PackageEUser",
            PackageEDate = "PackageEDate"
        }
    }
}
declare namespace ARLink.Default {
    namespace CustomerService {
        const baseUrl = "Default/Customer";
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Customer/Create",
            Update = "Default/Customer/Update",
            Delete = "Default/Customer/Delete",
            Retrieve = "Default/Customer/Retrieve",
            List = "Default/Customer/List"
        }
    }
}
declare namespace ARLink.Default {
    class DesignationColumns {
        static columnsKey: string;
    }
}
declare namespace ARLink.Default {
    interface DesignationForm {
        Name: Serenity.StringEditor;
        SortingOrder: Serenity.IntegerEditor;
        IUser: Serenity.StringEditor;
        IDate: Serenity.DateEditor;
        EUser: Serenity.StringEditor;
        EDate: Serenity.DateEditor;
    }
    class DesignationForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ARLink.Default {
    interface DesignationRow {
        Id?: number;
        Name?: string;
        SortingOrder?: number;
        IUser?: number;
        IDate?: string;
        EUser?: number;
        EDate?: string;
    }
    namespace DesignationRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Designation";
        const lookupKey = "Default.Designation";
        function getLookup(): Q.Lookup<DesignationRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            SortingOrder = "SortingOrder",
            IUser = "IUser",
            IDate = "IDate",
            EUser = "EUser",
            EDate = "EDate"
        }
    }
}
declare namespace ARLink.Default {
    namespace DesignationService {
        const baseUrl = "Default/Designation";
        function Create(request: Serenity.SaveRequest<DesignationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DesignationRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DesignationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DesignationRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Designation/Create",
            Update = "Default/Designation/Update",
            Delete = "Default/Designation/Delete",
            Retrieve = "Default/Designation/Retrieve",
            List = "Default/Designation/List"
        }
    }
}
declare namespace ARLink.Default {
    class EmployeeColumns {
        static columnsKey: string;
    }
}
declare namespace ARLink.Default {
    interface EmployeeForm {
        EmployeeIdentity: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        AddressPrmanent: Serenity.TextAreaEditor;
        AddressPresent: Serenity.TextAreaEditor;
        Nid: Serenity.StringEditor;
        PhoneNumber: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        DesignationId: Serenity.LookupEditor;
        Attachment: Serenity.ImageUploadEditor;
        IsActive: Serenity.BooleanEditor;
        JoiningDate: Serenity.DateEditor;
        IUser: Serenity.StringEditor;
        IDate: Serenity.DateEditor;
        EUser: Serenity.StringEditor;
        EDate: Serenity.DateEditor;
    }
    class EmployeeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ARLink.Default {
    interface EmployeeRow {
        Id?: number;
        LookupText?: string;
        EmployeeIdentity?: string;
        Name?: string;
        AddressPrmanent?: string;
        AddressPresent?: string;
        Nid?: string;
        PhoneNumber?: string;
        Email?: string;
        DesignationId?: number;
        Attachment?: string;
        IsActive?: boolean;
        JoiningDate?: string;
        IUser?: number;
        IDate?: string;
        EUser?: number;
        EDate?: string;
        DesignationName?: string;
        DesignationSortingOrder?: number;
        DesignationIUser?: number;
        DesignationIDate?: string;
        DesignationEUser?: number;
        DesignationEDate?: string;
    }
    namespace EmployeeRow {
        const idProperty = "Id";
        const nameProperty = "EmployeeIdentity";
        const localTextPrefix = "Default.Employee";
        const lookupKey = "Default.Employee";
        function getLookup(): Q.Lookup<EmployeeRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            LookupText = "LookupText",
            EmployeeIdentity = "EmployeeIdentity",
            Name = "Name",
            AddressPrmanent = "AddressPrmanent",
            AddressPresent = "AddressPresent",
            Nid = "Nid",
            PhoneNumber = "PhoneNumber",
            Email = "Email",
            DesignationId = "DesignationId",
            Attachment = "Attachment",
            IsActive = "IsActive",
            JoiningDate = "JoiningDate",
            IUser = "IUser",
            IDate = "IDate",
            EUser = "EUser",
            EDate = "EDate",
            DesignationName = "DesignationName",
            DesignationSortingOrder = "DesignationSortingOrder",
            DesignationIUser = "DesignationIUser",
            DesignationIDate = "DesignationIDate",
            DesignationEUser = "DesignationEUser",
            DesignationEDate = "DesignationEDate"
        }
    }
}
declare namespace ARLink.Default {
    class EmployeeSalaryColumns {
        static columnsKey: string;
    }
}
declare namespace ARLink.Default {
    interface EmployeeSalaryForm {
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
    class EmployeeSalaryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ARLink.Default {
    interface EmployeeSalaryRow {
        Id?: number;
        EmployeeId?: number;
        Amount?: number;
        MonthId?: number;
        PaymentDate?: string;
        Description?: string;
        IUser?: number;
        IDate?: string;
        EUser?: number;
        EDate?: string;
        EmployeeEmployeeIdentity?: string;
        EmployeeName?: string;
        EmployeeAddressPrmanent?: string;
        EmployeeAddressPresent?: string;
        EmployeeNid?: string;
        EmployeePhoneNumber?: string;
        EmployeeEmail?: string;
        EmployeeDesignationId?: number;
        EmployeeAttachment?: string;
        EmployeeIsActive?: boolean;
        EmployeeJoiningDate?: string;
        EmployeeIUser?: number;
        EmployeeIDate?: string;
        EmployeeEUser?: number;
        EmployeeEDate?: string;
        MonthName?: string;
        MonthSortingOrder?: number;
        MonthIUser?: number;
        MonthIDate?: string;
        MonthEUser?: number;
        MonthEDate?: string;
    }
    namespace EmployeeSalaryRow {
        const idProperty = "Id";
        const nameProperty = "Description";
        const localTextPrefix = "Default.EmployeeSalary";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            EmployeeId = "EmployeeId",
            Amount = "Amount",
            MonthId = "MonthId",
            PaymentDate = "PaymentDate",
            Description = "Description",
            IUser = "IUser",
            IDate = "IDate",
            EUser = "EUser",
            EDate = "EDate",
            EmployeeEmployeeIdentity = "EmployeeEmployeeIdentity",
            EmployeeName = "EmployeeName",
            EmployeeAddressPrmanent = "EmployeeAddressPrmanent",
            EmployeeAddressPresent = "EmployeeAddressPresent",
            EmployeeNid = "EmployeeNid",
            EmployeePhoneNumber = "EmployeePhoneNumber",
            EmployeeEmail = "EmployeeEmail",
            EmployeeDesignationId = "EmployeeDesignationId",
            EmployeeAttachment = "EmployeeAttachment",
            EmployeeIsActive = "EmployeeIsActive",
            EmployeeJoiningDate = "EmployeeJoiningDate",
            EmployeeIUser = "EmployeeIUser",
            EmployeeIDate = "EmployeeIDate",
            EmployeeEUser = "EmployeeEUser",
            EmployeeEDate = "EmployeeEDate",
            MonthName = "MonthName",
            MonthSortingOrder = "MonthSortingOrder",
            MonthIUser = "MonthIUser",
            MonthIDate = "MonthIDate",
            MonthEUser = "MonthEUser",
            MonthEDate = "MonthEDate"
        }
    }
}
declare namespace ARLink.Default {
    namespace EmployeeSalaryService {
        const baseUrl = "Default/EmployeeSalary";
        function Create(request: Serenity.SaveRequest<EmployeeSalaryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeSalaryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeSalaryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeSalaryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/EmployeeSalary/Create",
            Update = "Default/EmployeeSalary/Update",
            Delete = "Default/EmployeeSalary/Delete",
            Retrieve = "Default/EmployeeSalary/Retrieve",
            List = "Default/EmployeeSalary/List"
        }
    }
}
declare namespace ARLink.Default {
    namespace EmployeeService {
        const baseUrl = "Default/Employee";
        function Create(request: Serenity.SaveRequest<EmployeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Employee/Create",
            Update = "Default/Employee/Update",
            Delete = "Default/Employee/Delete",
            Retrieve = "Default/Employee/Retrieve",
            List = "Default/Employee/List"
        }
    }
}
declare namespace ARLink.Default {
    class ExpenditureColumns {
        static columnsKey: string;
    }
}
declare namespace ARLink.Default {
    interface ExpenditureForm {
        Name: Serenity.StringEditor;
        EmployeeId: Serenity.LookupEditor;
        MonthId: Serenity.LookupEditor;
        ExpenditureDate: Serenity.DateEditor;
        Description: Serenity.StringEditor;
        IUser: Serenity.StringEditor;
        IDate: Serenity.DateEditor;
        EUser: Serenity.StringEditor;
        EDate: Serenity.DateEditor;
    }
    class ExpenditureForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ARLink.Default {
    interface ExpenditureRow {
        Id?: number;
        Name?: string;
        EmployeeId?: number;
        MonthId?: number;
        ExpenditureDate?: string;
        Description?: string;
        IUser?: number;
        IDate?: string;
        EUser?: number;
        EDate?: string;
        EmployeeEmployeeIdentity?: string;
        EmployeeName?: string;
        EmployeeAddressPrmanent?: string;
        EmployeeAddressPresent?: string;
        EmployeeNid?: string;
        EmployeePhoneNumber?: string;
        EmployeeEmail?: string;
        EmployeeDesignationId?: number;
        EmployeeAttachment?: string;
        EmployeeIsActive?: boolean;
        EmployeeJoiningDate?: string;
        EmployeeIUser?: number;
        EmployeeIDate?: string;
        EmployeeEUser?: number;
        EmployeeEDate?: string;
        MonthName?: string;
        MonthSortingOrder?: number;
        MonthIUser?: number;
        MonthIDate?: string;
        MonthEUser?: number;
        MonthEDate?: string;
    }
    namespace ExpenditureRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Expenditure";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            EmployeeId = "EmployeeId",
            MonthId = "MonthId",
            ExpenditureDate = "ExpenditureDate",
            Description = "Description",
            IUser = "IUser",
            IDate = "IDate",
            EUser = "EUser",
            EDate = "EDate",
            EmployeeEmployeeIdentity = "EmployeeEmployeeIdentity",
            EmployeeName = "EmployeeName",
            EmployeeAddressPrmanent = "EmployeeAddressPrmanent",
            EmployeeAddressPresent = "EmployeeAddressPresent",
            EmployeeNid = "EmployeeNid",
            EmployeePhoneNumber = "EmployeePhoneNumber",
            EmployeeEmail = "EmployeeEmail",
            EmployeeDesignationId = "EmployeeDesignationId",
            EmployeeAttachment = "EmployeeAttachment",
            EmployeeIsActive = "EmployeeIsActive",
            EmployeeJoiningDate = "EmployeeJoiningDate",
            EmployeeIUser = "EmployeeIUser",
            EmployeeIDate = "EmployeeIDate",
            EmployeeEUser = "EmployeeEUser",
            EmployeeEDate = "EmployeeEDate",
            MonthName = "MonthName",
            MonthSortingOrder = "MonthSortingOrder",
            MonthIUser = "MonthIUser",
            MonthIDate = "MonthIDate",
            MonthEUser = "MonthEUser",
            MonthEDate = "MonthEDate"
        }
    }
}
declare namespace ARLink.Default {
    namespace ExpenditureService {
        const baseUrl = "Default/Expenditure";
        function Create(request: Serenity.SaveRequest<ExpenditureRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ExpenditureRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ExpenditureRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ExpenditureRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Expenditure/Create",
            Update = "Default/Expenditure/Update",
            Delete = "Default/Expenditure/Delete",
            Retrieve = "Default/Expenditure/Retrieve",
            List = "Default/Expenditure/List"
        }
    }
}
declare namespace ARLink.Default {
    class MonthColumns {
        static columnsKey: string;
    }
}
declare namespace ARLink.Default {
    interface MonthForm {
        Name: Serenity.StringEditor;
        SortingOrder: Serenity.IntegerEditor;
        IUser: Serenity.StringEditor;
        IDate: Serenity.DateEditor;
        EUser: Serenity.StringEditor;
        EDate: Serenity.DateEditor;
    }
    class MonthForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ARLink.Default {
    interface MonthRow {
        Id?: number;
        Name?: string;
        SortingOrder?: number;
        IUser?: number;
        IDate?: string;
        EUser?: number;
        EDate?: string;
    }
    namespace MonthRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Month";
        const lookupKey = "Default.Month";
        function getLookup(): Q.Lookup<MonthRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            SortingOrder = "SortingOrder",
            IUser = "IUser",
            IDate = "IDate",
            EUser = "EUser",
            EDate = "EDate"
        }
    }
}
declare namespace ARLink.Default {
    namespace MonthService {
        const baseUrl = "Default/Month";
        function Create(request: Serenity.SaveRequest<MonthRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MonthRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MonthRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MonthRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Month/Create",
            Update = "Default/Month/Update",
            Delete = "Default/Month/Delete",
            Retrieve = "Default/Month/Retrieve",
            List = "Default/Month/List"
        }
    }
}
declare namespace ARLink.Default {
    class PackageColumns {
        static columnsKey: string;
    }
}
declare namespace ARLink.Default {
    interface PackageForm {
        Name: Serenity.StringEditor;
        Amount: Serenity.DecimalEditor;
        Description: Serenity.TextAreaEditor;
        IUser: Serenity.StringEditor;
        IDate: Serenity.DateEditor;
        EUser: Serenity.StringEditor;
        EDate: Serenity.DateEditor;
    }
    class PackageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ARLink.Default {
    interface PackageRow {
        Id?: number;
        Name?: string;
        Amount?: number;
        Description?: string;
        IUser?: number;
        IDate?: string;
        EUser?: number;
        EDate?: string;
    }
    namespace PackageRow {
        const idProperty = "Id";
        const nameProperty = "Name";
        const localTextPrefix = "Default.Package";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            Id = "Id",
            Name = "Name",
            Amount = "Amount",
            Description = "Description",
            IUser = "IUser",
            IDate = "IDate",
            EUser = "EUser",
            EDate = "EDate"
        }
    }
}
declare namespace ARLink.Default {
    namespace PackageService {
        const baseUrl = "Default/Package";
        function Create(request: Serenity.SaveRequest<PackageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<PackageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PackageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PackageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Default/Package/Create",
            Update = "Default/Package/Update",
            Delete = "Default/Package/Delete",
            Retrieve = "Default/Package/Retrieve",
            List = "Default/Package/List"
        }
    }
}
declare namespace ARLink.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ARLink.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace ARLink.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ARLink.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace ARLink.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ARLink.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace ARLink.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ARLink.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace ARLink.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace ARLink.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace ARLink {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace ARLink.Texts {
}
declare namespace ARLink.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace ARLink.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace ARLink.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace ARLink.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace ARLink.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace ARLink.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace ARLink.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace ARLink.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace ARLink.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace ARLink.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace ARLink.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace ARLink.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace ARLink.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace ARLink.LanguageList {
    function getValue(): string[][];
}
declare namespace ARLink.ScriptInitialization {
}
declare namespace ARLink.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace ARLink.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace ARLink.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare namespace ARLink.Default {
    class AreaDialog extends Serenity.EntityDialog<AreaRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: AreaForm;
    }
}
declare namespace ARLink.Default {
    class AreaGrid extends Serenity.EntityGrid<AreaRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AreaDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ARLink.Default {
    class BillDialog extends Serenity.EntityDialog<BillRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: BillForm;
    }
}
declare namespace ARLink.Default {
    class BillGrid extends Serenity.EntityGrid<BillRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof BillDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ARLink.Default {
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CustomerForm;
    }
}
declare namespace ARLink.Default {
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CustomerDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ARLink.Default {
    class DesignationDialog extends Serenity.EntityDialog<DesignationRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DesignationForm;
    }
}
declare namespace ARLink.Default {
    class DesignationGrid extends Serenity.EntityGrid<DesignationRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DesignationDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ARLink.Default {
    class EmployeeDialog extends Serenity.EntityDialog<EmployeeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmployeeForm;
    }
}
declare namespace ARLink.Default {
    class EmployeeGrid extends Serenity.EntityGrid<EmployeeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ARLink.Default {
    class EmployeeSalaryDialog extends Serenity.EntityDialog<EmployeeSalaryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: EmployeeSalaryForm;
    }
}
declare namespace ARLink.Default {
    class EmployeeSalaryGrid extends Serenity.EntityGrid<EmployeeSalaryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeSalaryDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ARLink.Default {
    class ExpenditureDialog extends Serenity.EntityDialog<ExpenditureRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ExpenditureForm;
    }
}
declare namespace ARLink.Default {
    class ExpenditureGrid extends Serenity.EntityGrid<ExpenditureRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ExpenditureDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ARLink.Default {
    class MonthDialog extends Serenity.EntityDialog<MonthRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MonthForm;
    }
}
declare namespace ARLink.Default {
    class MonthGrid extends Serenity.EntityGrid<MonthRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MonthDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ARLink.Default {
    class PackageDialog extends Serenity.EntityDialog<PackageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: PackageForm;
    }
}
declare namespace ARLink.Default {
    class PackageGrid extends Serenity.EntityGrid<PackageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof PackageDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace ARLink.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace ARLink.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace ARLink.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace ARLink.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace ARLink.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
