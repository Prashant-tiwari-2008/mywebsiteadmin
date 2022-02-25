import { Routes } from '@angular/router'


export const contentRoutes : Routes =[
    {path :'dashboard',loadChildren:() => import('../../components/dashboard/dashboard.module').then(m =>m.DashboardModule)},
    {path :'projects',loadChildren:() => import('../../components/projects/projects.module').then(m =>m.ProjectsModule)},
    {path :'blogs',loadChildren:() => import('../../components/blogs/blogs.module').then(m =>m.BlogsModule)},
    {path :'memes',loadChildren:() => import('../../components/memes/memes.module').then(m =>m.MemesModule)},
    {path :'reviews',loadChildren:() => import('../../components/reviews/reviews.module').then(m =>m.ReviewsModule)},
    {path :'report',loadChildren:() => import('../../components/reports/reports.module').then(m =>m.ReportsModule)},
    {path :'profile',loadChildren:() => import('../../components/profile/profile.module').then(m =>m.ProfileModule)},
]