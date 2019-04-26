import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './dataGrids/basic/basic.component';
import { CustomCellRenderingComponent } from './dataGrids/custom-cell-rendering/custom-cell-rendering.component';
import { CustomSortingComponent } from './dataGrids/custom-sorting/custom-sorting.component';
import { CustomFilteringComponent } from './dataGrids/custom-filtering/custom-filtering.component';
import { PaginationComponent } from './dataGrids/pagination/pagination.component';


CustomFilteringComponent 

const routes: Routes = [
{ path: 'datagrid-basic', component: BasicComponent },
{ path: 'datagrid-custom-cell-rendering', component: CustomCellRenderingComponent },
{ path: 'datagrid-custom-sorting', component: CustomSortingComponent },
{ path: 'datagrid-custom-filtering', component: CustomFilteringComponent },
{ path: 'datagrid-pagination', component: PaginationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
