import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../models/user.model';
import { ManagementUserHttpService } from '../services/management-user-http.service';
import { CreateEditComponent } from './create-edit/create-edit.component';

@Component({
  selector: 'app-management-user',
  templateUrl: './management-user.component.html',
  styleUrls: ['./management-user.component.scss']
})
export class ManagementUserComponent implements OnInit {

  userList!: User[];
  pageSizes = [5, 10, 15, 20, 50, 100]
  page: number = 1;
  search: string = '';
  limit: number = 5;
  collectionSize: number = 0;
  constructor(
    private managementUserHttp: ManagementUserHttpService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getUsersWithParams();
  }

  paramsFilter() {
    return {
      page: this.page,
      search: this.search,
      limit: this.limit
    }
  }

  getUsersWithParams() {
    this.managementUserHttp.getUser(this.paramsFilter()).subscribe((res: any) => {
      this.userList = res;
      this.collectionSize = res?.length;
    })
  }

  refreshUserList() {
    this.getUsersWithParams();
  }

  deleteUser(user: User) {
    this.managementUserHttp.deleteUser(user.id).subscribe(res => {
      alert("Delete success!");
      this.getUsersWithParams();
    });
  }

  createEditUser(user: User) {
    user.id ? this.managementUserHttp.updateUser(user).subscribe(res => {
      this.getUsersWithParams();
    }) : this.managementUserHttp.createUser(user).subscribe(res => {
      this.getUsersWithParams();
    })
  }

  showCreateEditUser(user: any) {
    let label;
    user.id ? label = 'Edit User' : label = 'Create User';
    const modalRef = this.modalService.open(CreateEditComponent, {
      scrollable: true,
      windowClass: 'myCustomModalClass',
    })
    let data = {
      label: label,
      user: user,
      yesFunc: (user: User) => {
        this.createEditUser(user);
        modalRef.close();
      },
      noFunc: () => {
        modalRef.close();
      }
    }
    modalRef.componentInstance.fromParent = data;
  }
}
