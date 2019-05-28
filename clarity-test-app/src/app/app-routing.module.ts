import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './dataGrids/basic/basic.component';
import { CustomCellRenderingComponent } from './dataGrids/custom-cell-rendering/custom-cell-rendering.component';
import { CustomSortingComponent } from './dataGrids/custom-sorting/custom-sorting.component';
import { CustomFilteringComponent } from './dataGrids/custom-filtering/custom-filtering.component';
import { PaginationComponent } from './dataGrids/pagination/pagination.component';
import { SelectionComponent } from './dataGrids/selection/selection.component';
import { SingleSelectionComponent } from './dataGrids/single-selection/single-selection.component';
import { BatchActionComponent } from './dataGrids/batch-action/batch-action.component';
import { SingleActionComponent } from './dataGrids/single-action/single-action.component';
import { PlaceholderComponent } from './dataGrids/placeholder/placeholder.component';
import { ExpandableRowsComponent } from './dataGrids/expandable-rows/expandable-rows.component';
import { CompactComponent } from './dataGrids/compact/compact.component';
import { HideShowComponent } from './dataGrids/hide-show/hide-show.component';
import { StandardAlertComponent } from './alerts/standard-alert/standard-alert.component';
import { ColumnOrderingComponent } from './grids/column-ordering/column-ordering.component';
import { Wizard1Component } from './wizards/wizard1/wizard1.component';
import { WizardSkipStepComponent } from './wizards/wizard-skip-step/wizard-skip-step.component';
import { WizardAsyncFormValidationComponent } from './wizards/wizard-async-form-validation/wizard-async-form-validation.component';
import { WizardAsyncCompletionComponent } from './wizards/wizard-async-completion/wizard-async-completion.component';
import { DatePickerComponent } from './datePicker/date-picker/date-picker.component';
import { TreeViewBasicComponent } from './treeViews/tree-view-basic/tree-view-basic.component';
import { TreeViewCheckboxComponent } from './treeViews/tree-view-checkbox/tree-view-checkbox.component';



const routes: Routes = [
{ path: 'datagrid-basic', component: BasicComponent },
{ path: 'datagrid-custom-cell-rendering', component: CustomCellRenderingComponent },
{ path: 'datagrid-custom-sorting', component: CustomSortingComponent },
{ path: 'datagrid-custom-filtering', component: CustomFilteringComponent },
{ path: 'datagrid-pagination', component: PaginationComponent },
{ path: 'datagrid-selection', component: SelectionComponent },
{ path: 'datagrid-single-selection', component: SingleSelectionComponent },
{ path: 'datagrid-batch-action', component: BatchActionComponent },
{ path: 'datagrid-single-action', component: SingleActionComponent },
{ path: 'datagrid-placeholder', component: PlaceholderComponent },
{ path: 'datagrid-expandable-rows', component: ExpandableRowsComponent },
{ path: 'datagrid-compact', component: CompactComponent },
{ path: 'datagrid-hide-show', component: HideShowComponent },
{ path: 'standard-alert', component: StandardAlertComponent },
{ path: 'column-ordering', component: ColumnOrderingComponent },
{ path: 'wizard1', component: Wizard1Component },
{ path: 'wizard-skip-step', component:  WizardSkipStepComponent },
{ path: 'wizard-async-form-validation', component:  WizardAsyncFormValidationComponent },
{ path: 'wizard-async-completion', component:  WizardAsyncCompletionComponent },
{ path: 'date-picker', component: DatePickerComponent },
{ path: 'tree-view-basic', component: TreeViewBasicComponent },
{ path: 'tree-view-checkbox', component: TreeViewCheckboxComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
