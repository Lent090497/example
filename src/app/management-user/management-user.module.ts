import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ManagementUserComponent } from './management-user.component';
import { CreateEditComponent } from './create-edit/create-edit.component';



@NgModule({
  declarations: [ManagementUserComponent, CreateEditComponent],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    FormsModule
  ]
})
export class ManagementUserModule { }
