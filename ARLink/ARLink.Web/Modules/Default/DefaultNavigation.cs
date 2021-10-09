using Serenity.Navigation;
using MyPages = ARLink.Default.Pages;

[assembly: NavigationLink(int.MaxValue, "Setup/Month", typeof(MyPages.MonthController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Setup/Area", typeof(MyPages.AreaController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Setup/Designation", typeof(MyPages.DesignationController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Setup/Package", typeof(MyPages.PackageController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Task/Customer", typeof(MyPages.CustomerController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Task/Employee", typeof(MyPages.EmployeeController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Task/Bill", typeof(MyPages.BillController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Task/Employee Salary", typeof(MyPages.EmployeeSalaryController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Task/Expenditure", typeof(MyPages.ExpenditureController), icon: null)]