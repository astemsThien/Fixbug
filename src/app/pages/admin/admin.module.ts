import {NgModule} from '@angular/core';
import {DevExtremeModule} from 'devextreme-angular';
import {TranordComponent} from './tranord/tranord.component';
import {CommonModule} from '@angular/common';
import {TranordmassComponent} from './tranordmass/tranordmass.component';
import {TranordstatusComponent} from './tranordstatus/tranordstatus.component';
import {TranordallocateComponent} from './tranordallocate/tranordallocate.component';
import {TranordaccidentComponent} from './tranordaccident/tranordaccident.component';
import {PopupModule} from '../popup/popup.module';
import { AstemsComponent } from './astems/astems.component';
import { Astems02Component } from './astems02/astems02.component';
import { Astems03Component } from './astems03/astems03.component';
import { Astems04Component } from './astems04/astems04.component';
import { Astems05Component } from './astems05/astems05.component';
import { Astems06Component } from './astems06/astems06.component';
import { Astems07Component } from './astems07/astems07.component';
import { Astems08Component } from './astems08/astems08.component';
import { Astems09Component } from './astems09/astems09.component';
import { Astems10Component } from './astems10/astems10.component';

@NgModule({
  declarations: [
    TranordComponent,
    TranordmassComponent,
    TranordstatusComponent,
    TranordallocateComponent,
    TranordaccidentComponent,
    AstemsComponent,
    Astems02Component,
    Astems03Component,
    Astems04Component,
    Astems05Component,
    Astems06Component,
    Astems07Component,
    Astems08Component,
    Astems09Component,
    Astems10Component
  ],
  imports: [
    DevExtremeModule,
    CommonModule,
    PopupModule
  ]
})
export class AdminModule {
}
