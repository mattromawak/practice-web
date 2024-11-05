// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemCreateComponent } from './components/item-create/item-create.component';
import { ItemEditComponent } from './components/item-edit/item-edit.component';

const routes: Routes = [
    { path: 'items', component: ItemListComponent },
    { path: 'create-item', component: ItemCreateComponent },
    { path: 'edit-item/:id', component: ItemEditComponent },
    { path: '', redirectTo: '/items', pathMatch: 'full' } // Default route
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
