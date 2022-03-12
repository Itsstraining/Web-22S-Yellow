import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroduceRoutingModule } from './introduce-routing.module';
import { IntroduceComponent } from './introduce.component';
import { SharedModulesModule } from 'src/app/Shared/shared-modules/shared-modules.module';

@NgModule({
  declarations: [
    IntroduceComponent,
  ],
  imports: [
    CommonModule,
    IntroduceRoutingModule,
    SharedModulesModule,
  ]
})
export class IntroduceModule { }
