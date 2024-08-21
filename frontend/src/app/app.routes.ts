import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeDashboardComponent } from './pages/employee-dashboard/employee-dashboard.component';
import { LeaveFormComponent } from './components/leave-form/leave-form.component';
import { SalaryComponent } from './components/salary/salary.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { LeaveRequestsComponent } from './components/admin-dashboard-components/leave-requests/leave-requests.component';
import { InfoComponent } from './components/info/info.component';
import { WhyukgComponent } from './components/whyukg/whyukg.component';
import { LeaveComponent } from './components/leave/leave.component';
import { EmployeeListComponent } from './components/admin-dashboard-components/employee-list/employee-list.component';
import { NewEmployeeComponent } from './components/admin-dashboard-components/new-employee/new-employee.component';
import { AccountantDashboardComponent } from './pages/accountant-dashboard/accountant-dashboard.component';
import { GeneratePayslipComponent } from './components/accountant-dashboard-components/generate-payslip/generate-payslip.component';
import { DashboardWelcomeComponent } from './components/dashboard-welcome/dashboard-welcome.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ForgotPasswordTokenComponent } from './pages/forgot-password-token/forgot-password-token.component';
import { GeneratepdfComponent } from './components/generatepdf/generatepdf.component';
// import { LeaveComponent } from './components/leave/leave.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'forgot-password/:token', component: ForgotPasswordTokenComponent},
    { path: 'generatepdf', component: GeneratepdfComponent},
    // Employee Routes
    {
        path: 'employee/dashboard', component: EmployeeDashboardComponent, children: [{
            path: 'leaves', component: LeaveComponent
        }, {
            path: 'leaves/leave-request', component: LeaveFormComponent
        }, {
            path: 'salary', component: SalaryComponent
        }, {
            path: 'profile', component: ProfileComponent
        }, {
            path: 'info', component: InfoComponent
        }, {
            path: 'whyukg', component: WhyukgComponent
        }, {
            path: '', component: DashboardWelcomeComponent
        }
        ]
    },

    // Admin Routes
    {
        path: 'admin/dashboard', component: AdminDashboardComponent, children: [
            {
                path: 'employee-list', component: EmployeeListComponent
            }, {
                path: 'employee-list/add-employee', component: NewEmployeeComponent
            }, {
                path: 'leaves', component: LeaveComponent
            }, {
                path: 'leaves/leave-request', component: LeaveFormComponent
            }, {
                path: 'leave-requests', component: LeaveRequestsComponent
            }, {
                path: 'salary', component: SalaryComponent
            }, {
                path: 'profile', component: ProfileComponent
            }, {
                path: 'info', component: InfoComponent
            }, {
                path: 'whyukg', component: WhyukgComponent
            }, {
                path: '', component: DashboardWelcomeComponent
            }
        ]
    },

    // Accountant routes
    {
        path: 'accountant/dashboard', component: AccountantDashboardComponent, children: [{
            path: 'leaves', component: LeaveComponent
        }, {
            path: 'leaves/leave-request', component: LeaveFormComponent
        }, {
            path: 'salary', component: SalaryComponent
        }, {
            path: 'profile', component: ProfileComponent
        }, {
            path: 'info', component: InfoComponent
        }, {
            path: 'whyukg', component: WhyukgComponent
        }, {
            path: 'generate-payslip', component: GeneratePayslipComponent
        }, {
            path: '', component: DashboardWelcomeComponent
        }
        ]
    },
];
