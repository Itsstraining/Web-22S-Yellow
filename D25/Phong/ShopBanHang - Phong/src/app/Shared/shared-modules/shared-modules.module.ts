import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouterComponent } from 'src/app/Components/couter/couter.component';
import { ItemsComponent } from 'src/app/Components/items/items.component';
import { ListItemsComponent } from 'src/app/Components/list-items/list-items.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    CouterComponent,
    ItemsComponent,
    ListItemsComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    HttpClientModule

  ],
  exports:[
    FormsModule,
    CouterComponent,
    ItemsComponent,
    ListItemsComponent,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    HttpClientModule
  ]
})
export class SharedModulesModule { }
