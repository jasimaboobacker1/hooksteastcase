import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { HooksComponent } from './hooks/hooks.component';

export const routes: Routes = [
    {
       path:'parent',
       component:ParentComponent
    },
    {
        path:'ng',
        component:NgcontentComponent
     },
     {
      path:'hooks',
      component:HooksComponent
   },
];
