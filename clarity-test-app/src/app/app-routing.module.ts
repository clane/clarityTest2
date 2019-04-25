import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './dataGrids/basic/basic.component';
import { CustomCellRenderingComponent } from './dataGrids/custom-cell-rendering/custom-cell-rendering.component';
import { CustomSortingComponent } from './dataGrids/custom-sorting/custom-sorting.component';

const routes: Routes = [
{ path: 'datagrid-basic', component: BasicComponent },
{ path: 'datagrid-custom-cell-rendering', component: CustomCellRenderingComponent },
{ path: 'datagrid-custom-sorting', component: CustomSortingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
