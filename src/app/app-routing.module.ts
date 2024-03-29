import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';
const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'pedidos', component: PedidosComponent},
{path: 'produtos', component: ProdutosComponent},
{path: 'home', component: HomeComponent}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
