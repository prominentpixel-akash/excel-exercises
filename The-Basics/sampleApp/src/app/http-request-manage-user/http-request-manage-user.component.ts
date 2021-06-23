import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../service/user-service';
import {MaskService} from '../service/mask.service';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-http-request-manage-user',
  templateUrl: './http-request-manage-user.component.html',
  styleUrls: ['./http-request-manage-user.component.scss']
})
export class HttpRequestManageUserComponent implements OnInit {

  constructor(private userService: UserService, private maskService: MaskService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  @ViewChild('table') table: DatatableComponent;

  gridConfig: any = {
    page: 0,
    pageSize: 10,
    sortColumn: 'id',
    sortOrder: 'asc',
    searchTerm: ''
  };

  rows: any;
  ColumnMode = ColumnMode;
  totalElements: any;
  searchText: string;

  deleteUser(id) {
    this.maskService.startLoading();
    this.userService.deleteUserById(id).subscribe(data => {
        this.getUsers();
        this.maskService.endLoading();
      },
      error => {
        this.maskService.endLoading();
      });
  }

  onPageChange(eventDetails) {
    this.gridConfig.page = eventDetails.offset;
    this.getUsers();
  }

  onSort(eventDetails) {
    this.gridConfig.sortOrder = eventDetails.newValue;
    this.gridConfig.sortColumn = eventDetails.column.prop;
    this.getUsers();
  }

  onSearch(eventDetails) {
    this.gridConfig.searchTerm = this.searchText;
    this.getUsers();
  }

  getUsers() {
    this.maskService.startLoading();
    this.userService.getUsers(this.gridConfig.page, this.gridConfig.pageSize, this.gridConfig.sortColumn, this.gridConfig.sortOrder,
      this.gridConfig.searchTerm).subscribe(pagedData => {
        this.rows = pagedData.userList;
        this.totalElements = pagedData.totalCount;
        this.maskService.endLoading();
      },
      error => {
        this.maskService.endLoading();
      });
  }
}
