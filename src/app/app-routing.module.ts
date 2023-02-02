import { NgModule } from '@angular/core';
import { MatActionList } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { MainlayeroutComponent } from './Layerout/mainlayerout/mainlayerout.component';
import { CreateProductComponent } from './Pages/create-product/create-product.component';
import { ProductComponent } from './Pages/product/product.component';


const routes: Routes = [
  {path: '', component:MainlayeroutComponent,
children:[{path: '',component: ProductComponent},
{path: 'create-product', component: CreateProductComponent}
]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
