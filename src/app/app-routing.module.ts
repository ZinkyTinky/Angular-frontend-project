import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { EditComponent } from './components/edit/edit.component';
import { ProductComponent } from './components/product/product.component';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  {path: 'products', component: ProductsComponent, pathMatch: 'full'},
  {path: 'products/:id', component: ProductComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'add',component: AddComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
