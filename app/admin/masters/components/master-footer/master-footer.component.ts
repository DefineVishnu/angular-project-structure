import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { } from 'events';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'master-footer',
  templateUrl: './master-footer.component.html',
  styleUrls: ['./master-footer.component.css']
})
export class MasterFooterComponent implements OnInit {

  constructor(public userService: UserService) { }
  //events for the components
  @Output("save") save: EventEmitter<null> = new EventEmitter();
  @Output("cancell") cancell: EventEmitter<null> = new EventEmitter();
  makeVisibleSave: boolean;

  ngOnInit() {
    this.versifyAdminAcess()
  }


  versifyAdminAcess() {
    this.makeVisibleSave = this.userService.verifyAdminAuthorisation();
    if(!this.makeVisibleSave){
      alert('only admin can see save buton')
    }
  }



  emitCancellEvent() {
    this.cancell.emit();
  }


  emitSaveEvent() {
    this.save.emit();
  }




}
