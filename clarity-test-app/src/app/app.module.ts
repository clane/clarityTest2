import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './dataGrids/basic/basic.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomCellRenderingComponent } from './dataGrids/custom-cell-rendering/custom-cell-rendering.component';
import { CustomSortingComponent } from './dataGrids/custom-sorting/custom-sorting.component';
import { CustomFilteringComponent } from './dataGrids/custom-filtering/custom-filtering.component';
import { PaginationComponent } from './dataGrids/pagination/pagination.component';
import { UsersComponent } from './dataGrids/users/users.component';
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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WizardAsyncCompletionComponent } from './wizards/wizard-async-completion/wizard-async-completion.component';
import { DatePickerComponent } from './datePicker/date-picker/date-picker.component';
import { TreeViewBasicComponent } from './treeViews/tree-view-basic/tree-view-basic.component';
import { TreeViewCheckboxComponent } from './treeViews/tree-view-checkbox/tree-view-checkbox.component';
import { TreeViewIconsComponent } from './treeViews/tree-view-icons/tree-view-icons.component';
import { FormsDemo1Component } from './forms/forms-demo1/forms-demo1.component'


@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    CustomCellRenderingComponent,
    CustomSortingComponent,
    CustomFilteringComponent,
    PaginationComponent,
    UsersComponent,
    SelectionComponent,
    SingleSelectionComponent,
    BatchActionComponent,
    SingleActionComponent,
    PlaceholderComponent,
    ExpandableRowsComponent,
    CompactComponent,
    HideShowComponent,
    StandardAlertComponent,
    ColumnOrderingComponent,
    Wizard1Component,
    WizardSkipStepComponent,
    WizardAsyncFormValidationComponent,
    WizardAsyncCompletionComponent,
    DatePickerComponent,
    TreeViewBasicComponent,
    TreeViewCheckboxComponent,
    TreeViewIconsComponent,
    FormsDemo1Component,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
