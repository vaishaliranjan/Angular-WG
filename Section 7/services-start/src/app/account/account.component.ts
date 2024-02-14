import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.services';
import { AccountService } from '../account.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
//private loggingService?: LoggingService;
  constructor(private loggingService: LoggingService, private accountService: AccountService){
// this.loggingService=inject(loggingService)
  }

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountService.updateStatus(this.id,status);
    this.loggingService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);
    this.accountService.statusUpdated.emit(status);
  }
}
