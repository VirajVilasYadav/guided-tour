import { Routes } from '@angular/router';
import { AuthorComponent } from './components/author/author.component';
import { CreateTourComponent } from './components/author/components/create-tour/create-tour.component';
import { ManageToursComponent } from './components/author/components/manage-tours/manage-tours.component';
import { SomeAppComponent } from './components/some-app/some-app.component';

export const routes: Routes = [
    {
        path: 'some-app',
        component: SomeAppComponent
    },
    {
        path: 'author',
        component: AuthorComponent,
        children: [
            {
                path: 'create-tour',
                component: CreateTourComponent
            },
            {
                path: 'manange-tours',
                component: ManageToursComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'some-app',
        pathMatch: 'full'
    },
    {
        path: "*",
        redirectTo: 'some-app',
        pathMatch: 'full'
    }
];
