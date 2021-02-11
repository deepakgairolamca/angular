import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
const routes: Routes = [
  { path: 'product', component: ProductListComponent },
  { path: '', redirectTo: 'product', pathMatch: 'full' }, // redirect to `first-
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [],
})
export class ShopRoutingModule { }
