import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.scss']
})
export class CreateEditComponent implements OnInit {

  @Input() fromParent: any = {
    label: '',
    user: {},
    yesFunc: Function,
    noFunc: Function,
  };
  constructor() { }

  ngOnInit(): void {
  }

}
