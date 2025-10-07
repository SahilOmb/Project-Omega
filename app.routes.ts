import { Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { Subjects } from './subjects/subjects';
import { Users } from './users/users';
import { Questions } from './questions/questions';
import { ExamComponent} from './exams/exams';
import { AnalyticsComponent } from './analytics/analytics';

export const routes: Routes = [
    {path:'admin',component:AdminDashboard},
    { path: 'subjects', component: Subjects },
    { path: 'user', component: Users },
     { path: 'question', component: Questions },
     { path: 'exams', component: ExamComponent },
     { path: 'analytics', component: AnalyticsComponent }

];
