import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.services';
import { AccountService } from '../account.services';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoggingService]
  // providers:[LoggingService,AccountService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  //how do we tell to inject dependency 
  //by prop angula knows need injection and need to use providers to actually inject it
  constructor(private loggingService: LoggingService,private accountService:AccountService){
    this.accountService.statusUpdated.subscribe((status: string)=>alert("NewStatus "+status));

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus)
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // // const service = new LoggingService();
    // service.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
