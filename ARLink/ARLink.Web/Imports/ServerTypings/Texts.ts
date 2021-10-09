namespace ARLink.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Default {

            namespace Area {
                export const EDate: string;
                export const EUser: string;
                export const IDate: string;
                export const IUser: string;
                export const Id: string;
                export const Name: string;
                export const SortingOrder: string;
            }

            namespace Bill {
                export const BillAmount: string;
                export const CustomerAddress: string;
                export const CustomerAreaId: string;
                export const CustomerAttachment: string;
                export const CustomerConnectionDate: string;
                export const CustomerCustomerIdentity: string;
                export const CustomerEDate: string;
                export const CustomerEUser: string;
                export const CustomerEmail: string;
                export const CustomerIDate: string;
                export const CustomerIUser: string;
                export const CustomerId: string;
                export const CustomerIsActive: string;
                export const CustomerName: string;
                export const CustomerNid: string;
                export const CustomerPhoneNumber1: string;
                export const CustomerPhoneNumber2: string;
                export const Description: string;
                export const EDate: string;
                export const EUser: string;
                export const IDate: string;
                export const IUser: string;
                export const Id: string;
                export const MonthEDate: string;
                export const MonthEUser: string;
                export const MonthIDate: string;
                export const MonthIUser: string;
                export const MonthId: string;
                export const MonthName: string;
                export const MonthSortingOrder: string;
                export const PaymentDate: string;
                export const RecivedBy: string;
                export const RecivedByAddressPresent: string;
                export const RecivedByAddressPrmanent: string;
                export const RecivedByAttachment: string;
                export const RecivedByDesignationId: string;
                export const RecivedByEDate: string;
                export const RecivedByEUser: string;
                export const RecivedByEmail: string;
                export const RecivedByEmployeeIdentity: string;
                export const RecivedByIDate: string;
                export const RecivedByIUser: string;
                export const RecivedByIsActive: string;
                export const RecivedByJoiningDate: string;
                export const RecivedByName: string;
                export const RecivedByNid: string;
                export const RecivedByPhoneNumber: string;
            }

            namespace Customer {
                export const Address: string;
                export const AreaEDate: string;
                export const AreaEUser: string;
                export const AreaIDate: string;
                export const AreaIUser: string;
                export const AreaId: string;
                export const AreaName: string;
                export const AreaSortingOrder: string;
                export const Attachment: string;
                export const ConnectionDate: string;
                export const CustomerIdentity: string;
                export const EDate: string;
                export const EUser: string;
                export const Email: string;
                export const IDate: string;
                export const IUser: string;
                export const Id: string;
                export const IsActive: string;
                export const LookupText: string;
                export const Name: string;
                export const Nid: string;
                export const PackageAmount: string;
                export const PackageDescription: string;
                export const PackageEDate: string;
                export const PackageEUser: string;
                export const PackageIDate: string;
                export const PackageIUser: string;
                export const PackageId: string;
                export const PackageName: string;
                export const PhoneNumber1: string;
                export const PhoneNumber2: string;
            }

            namespace Designation {
                export const EDate: string;
                export const EUser: string;
                export const IDate: string;
                export const IUser: string;
                export const Id: string;
                export const Name: string;
                export const SortingOrder: string;
            }

            namespace Employee {
                export const AddressPresent: string;
                export const AddressPrmanent: string;
                export const Attachment: string;
                export const DesignationEDate: string;
                export const DesignationEUser: string;
                export const DesignationIDate: string;
                export const DesignationIUser: string;
                export const DesignationId: string;
                export const DesignationName: string;
                export const DesignationSortingOrder: string;
                export const EDate: string;
                export const EUser: string;
                export const Email: string;
                export const EmployeeIdentity: string;
                export const IDate: string;
                export const IUser: string;
                export const Id: string;
                export const IsActive: string;
                export const JoiningDate: string;
                export const LookupText: string;
                export const Name: string;
                export const Nid: string;
                export const PhoneNumber: string;
            }

            namespace EmployeeSalary {
                export const Amount: string;
                export const Description: string;
                export const EDate: string;
                export const EUser: string;
                export const EmployeeAddressPresent: string;
                export const EmployeeAddressPrmanent: string;
                export const EmployeeAttachment: string;
                export const EmployeeDesignationId: string;
                export const EmployeeEDate: string;
                export const EmployeeEUser: string;
                export const EmployeeEmail: string;
                export const EmployeeEmployeeIdentity: string;
                export const EmployeeIDate: string;
                export const EmployeeIUser: string;
                export const EmployeeId: string;
                export const EmployeeIsActive: string;
                export const EmployeeJoiningDate: string;
                export const EmployeeName: string;
                export const EmployeeNid: string;
                export const EmployeePhoneNumber: string;
                export const IDate: string;
                export const IUser: string;
                export const Id: string;
                export const MonthEDate: string;
                export const MonthEUser: string;
                export const MonthIDate: string;
                export const MonthIUser: string;
                export const MonthId: string;
                export const MonthName: string;
                export const MonthSortingOrder: string;
                export const PaymentDate: string;
            }

            namespace Expenditure {
                export const Description: string;
                export const EDate: string;
                export const EUser: string;
                export const EmployeeAddressPresent: string;
                export const EmployeeAddressPrmanent: string;
                export const EmployeeAttachment: string;
                export const EmployeeDesignationId: string;
                export const EmployeeEDate: string;
                export const EmployeeEUser: string;
                export const EmployeeEmail: string;
                export const EmployeeEmployeeIdentity: string;
                export const EmployeeIDate: string;
                export const EmployeeIUser: string;
                export const EmployeeId: string;
                export const EmployeeIsActive: string;
                export const EmployeeJoiningDate: string;
                export const EmployeeName: string;
                export const EmployeeNid: string;
                export const EmployeePhoneNumber: string;
                export const ExpenditureDate: string;
                export const IDate: string;
                export const IUser: string;
                export const Id: string;
                export const MonthEDate: string;
                export const MonthEUser: string;
                export const MonthIDate: string;
                export const MonthIUser: string;
                export const MonthId: string;
                export const MonthName: string;
                export const MonthSortingOrder: string;
                export const Name: string;
            }

            namespace Month {
                export const EDate: string;
                export const EUser: string;
                export const IDate: string;
                export const IUser: string;
                export const Id: string;
                export const Name: string;
                export const SortingOrder: string;
            }

            namespace Package {
                export const Amount: string;
                export const Description: string;
                export const EDate: string;
                export const EUser: string;
                export const IDate: string;
                export const IUser: string;
                export const Id: string;
                export const Name: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Navigation {
        export const LogoutLink: string;
        export const SiteTitle: string;
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    ARLink['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Default:{Area:{EDate:1,EUser:1,IDate:1,IUser:1,Id:1,Name:1,SortingOrder:1},Bill:{BillAmount:1,CustomerAddress:1,CustomerAreaId:1,CustomerAttachment:1,CustomerConnectionDate:1,CustomerCustomerIdentity:1,CustomerEDate:1,CustomerEUser:1,CustomerEmail:1,CustomerIDate:1,CustomerIUser:1,CustomerId:1,CustomerIsActive:1,CustomerName:1,CustomerNid:1,CustomerPhoneNumber1:1,CustomerPhoneNumber2:1,Description:1,EDate:1,EUser:1,IDate:1,IUser:1,Id:1,MonthEDate:1,MonthEUser:1,MonthIDate:1,MonthIUser:1,MonthId:1,MonthName:1,MonthSortingOrder:1,PaymentDate:1,RecivedBy:1,RecivedByAddressPresent:1,RecivedByAddressPrmanent:1,RecivedByAttachment:1,RecivedByDesignationId:1,RecivedByEDate:1,RecivedByEUser:1,RecivedByEmail:1,RecivedByEmployeeIdentity:1,RecivedByIDate:1,RecivedByIUser:1,RecivedByIsActive:1,RecivedByJoiningDate:1,RecivedByName:1,RecivedByNid:1,RecivedByPhoneNumber:1},Customer:{Address:1,AreaEDate:1,AreaEUser:1,AreaIDate:1,AreaIUser:1,AreaId:1,AreaName:1,AreaSortingOrder:1,Attachment:1,ConnectionDate:1,CustomerIdentity:1,EDate:1,EUser:1,Email:1,IDate:1,IUser:1,Id:1,IsActive:1,LookupText:1,Name:1,Nid:1,PackageAmount:1,PackageDescription:1,PackageEDate:1,PackageEUser:1,PackageIDate:1,PackageIUser:1,PackageId:1,PackageName:1,PhoneNumber1:1,PhoneNumber2:1},Designation:{EDate:1,EUser:1,IDate:1,IUser:1,Id:1,Name:1,SortingOrder:1},Employee:{AddressPresent:1,AddressPrmanent:1,Attachment:1,DesignationEDate:1,DesignationEUser:1,DesignationIDate:1,DesignationIUser:1,DesignationId:1,DesignationName:1,DesignationSortingOrder:1,EDate:1,EUser:1,Email:1,EmployeeIdentity:1,IDate:1,IUser:1,Id:1,IsActive:1,JoiningDate:1,LookupText:1,Name:1,Nid:1,PhoneNumber:1},EmployeeSalary:{Amount:1,Description:1,EDate:1,EUser:1,EmployeeAddressPresent:1,EmployeeAddressPrmanent:1,EmployeeAttachment:1,EmployeeDesignationId:1,EmployeeEDate:1,EmployeeEUser:1,EmployeeEmail:1,EmployeeEmployeeIdentity:1,EmployeeIDate:1,EmployeeIUser:1,EmployeeId:1,EmployeeIsActive:1,EmployeeJoiningDate:1,EmployeeName:1,EmployeeNid:1,EmployeePhoneNumber:1,IDate:1,IUser:1,Id:1,MonthEDate:1,MonthEUser:1,MonthIDate:1,MonthIUser:1,MonthId:1,MonthName:1,MonthSortingOrder:1,PaymentDate:1},Expenditure:{Description:1,EDate:1,EUser:1,EmployeeAddressPresent:1,EmployeeAddressPrmanent:1,EmployeeAttachment:1,EmployeeDesignationId:1,EmployeeEDate:1,EmployeeEUser:1,EmployeeEmail:1,EmployeeEmployeeIdentity:1,EmployeeIDate:1,EmployeeIUser:1,EmployeeId:1,EmployeeIsActive:1,EmployeeJoiningDate:1,EmployeeName:1,EmployeeNid:1,EmployeePhoneNumber:1,ExpenditureDate:1,IDate:1,IUser:1,Id:1,MonthEDate:1,MonthEUser:1,MonthIDate:1,MonthIUser:1,MonthId:1,MonthName:1,MonthSortingOrder:1,Name:1},Month:{EDate:1,EUser:1,IDate:1,IUser:1,Id:1,Name:1,SortingOrder:1},Package:{Amount:1,Description:1,EDate:1,EUser:1,IDate:1,IUser:1,Id:1,Name:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Navigation:{LogoutLink:1,SiteTitle:1},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
