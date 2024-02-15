import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.services";

@Injectable() //this service is injectable-something can be injected
export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
      statusUpdated= new EventEmitter<string>();
      addAccount(name: string, status:string){
        this.accounts.push({name:name,status:status});
        this.loggingService.logStatusChange(status);
      }
      updateStatus(id: number, status:string){
        this.accounts[id].status =status;
        this.loggingService.logStatusChange(status);
      }

      constructor(private loggingService: LoggingService ){

      }
}