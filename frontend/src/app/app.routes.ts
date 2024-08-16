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
// import { LeaveComponent } from './components/leave/leave.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },

    {
        path: 'employee/dashboard', component: EmployeeDashboardComponent, children: [{
            path: 'leaves', component: LeaveFormComponent
        }, {
            path: 'salary', component: SalaryComponent
        }, {
            path: 'profile', component: ProfileComponent
        }]
    },
    {
        path: 'admin/dashboard', component: AdminDashboardComponent, children: [{
            path: 'leaves', component: LeaveComponent
        }, {
            path: 'leaves/leave-request', component: LeaveFormComponent
        }, {
            path: 'salary', component: SalaryComponent
        }, {
            path: 'profile', component: ProfileComponent
        }, {
            path: 'employee-list', component: EmployeeListComponent
        }, {
            path: 'leave-request', component: LeaveRequestsComponent
        },
        {
            path: 'info', component: InfoComponent
        },
        {
            path: 'whyukg', component: WhyukgComponent

        },
        {
            path: 'employee-list/add-employee', component: NewEmployeeComponent
        },
      
    {
            path: 'employee-list/add-employee', component: NewEmployeeComponent
        }
        ]
    },
];
