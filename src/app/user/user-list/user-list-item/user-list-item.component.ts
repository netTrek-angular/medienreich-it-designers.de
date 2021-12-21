import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {User} from "../../user";

@Component({
  selector: 'itd-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent /*implements OnChanges*/ {

  @Input()
  @HostBinding('class.selected')
  isSelected?: boolean;

  @Input() user?: User;
  @Output() selectedUsr: EventEmitter<User> = new EventEmitter<User>();

  constructor() { }

  @HostListener('click', ['$event'])
  selectUser( mouseEvent: MouseEvent ) {
    console.log( mouseEvent )
    this.selectedUsr.emit( this.user );
  }

  /*
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes['isSelected']?.currentValue );
    // this.wasSelected = changes['isSelected']?.currentValue;
  }
  */
}
