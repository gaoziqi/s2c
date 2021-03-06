import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatExpansionModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

import { PagesRoutingModule } from './pages-routing.module';
import { ButtonsIndicatorsModule } from './buttons-indicators/buttons-indicators.module';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    PagesRoutingModule,
    ButtonsIndicatorsModule
  ]
})
export class PagesModule {}
