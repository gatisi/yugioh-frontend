import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSliderModule,
    MatMenuModule
  ],
  exports: [
    MatSliderModule,
    MatInputModule,
    MatMenuModule
  ]
})
export class SharedModule { }
