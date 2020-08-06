import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { SelectEnumComponent } from './components/select-enum/select-enum.component';
import {SharedModule} from '../shared/shared.module';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [SelectEnumComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    SharedModule,
  ]
})
export class TestModule { }
