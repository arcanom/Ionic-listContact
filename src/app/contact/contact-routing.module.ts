import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactPage } from './contact.page';

const routes: Routes = [
  {
    path: 'list',
    component: ContactPage,
    
    children: [{
      path: 'add',
      children:[{
        path:'',
        loadChildren: () => import('../contact/add/add.module').then(m => m.AddPageModule)
      }

      ]

    }]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactPageRoutingModule {}
