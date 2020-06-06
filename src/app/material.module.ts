import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatBottomSheetModule
  ],
  exports: [
    MatSliderModule,
    MatBottomSheetModule
  ]
})
export class MaterialModule { }
