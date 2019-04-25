import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './dataGrids/basic/basic.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomCellRenderingComponent } from './dataGrids/custom-cell-rendering/custom-cell-rendering.component';
import { CustomSortingComponent } from './dataGrids/custom-sorting/custom-sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    CustomCellRenderingComponent,
    CustomSortingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
