import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EmployeeDashboardComponent } from './pages/employee-dashboard/employee-dashboard.component';
import { LeaveFormComponent } from './components/leave-form/leave-form.component';
import { SalaryComponent } from './components/salary/salary.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
<<<<<<< HEAD
import { LeaveRequestsComponent } from './components/admin-dashboard-components/leave-requests/leave-requests.component';
=======
import { LeaveComponent } from './components/leave/leave.component';
import { EmployeeListComponent } from './components/admin-dashboard-components/employee-list/employee-list.component';
import { NewEmployeeComponent } from './components/admin-dashboard-components/new-employee/new-employee.component';
>>>>>>> db5cc3148b14d042bb708f8ca789a9da96a12c0b

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
<<<<<<< HEAD
            path: 'leave-request', component: LeaveRequestsComponent
        }
    ]  
=======
            path: 'employee-list/add-employee', component: NewEmployeeComponent
        },
        ]
>>>>>>> db5cc3148b14d042bb708f8ca789a9da96a12c0b
    },
];
