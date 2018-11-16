import { Account } from '../classes/account/account';

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  page = {
    title: 'Add Account',
    date: '',
    username: {
      title: 'Username *',
      error:{
        message: 'A valid username is required',
        hidden: true
      }
    },
    password: {
      title: 'Password *',
      error: {
        message: 'Please enter a password',
        hidden: true
      }
    },

    site: {
      title: 'Website *',
      error: {
        message: 'Please enter a website',
        hidden: true
      }
    },
    other: {
      title: 'Other',
      message: "Not required"
    }
  }

  accountHistory: Array<Account> = [];

  constructor(
    private accountService: AccountService
  ) {
    // this.page.email.error.hidden = true;
    // this.page.password.error.hidden = true
  }

  ngOnInit() {
  }

  // TODO: Push data to database
  // Send data to database by input over "Enter" or Button klick
  SendAccount(username: string, password: string, info: string, website: string){

    // Check if empty
    if(website == ''){
      this.page.site.error.hidden = false;
    }
    if(username == ''){
      this.page.username.error.hidden = false;
    }
    if(password == ''){
      this.page.password.error.hidden = false;
    }


    // Check if filled out again
    if(username != ''){
      this.page.username.error.hidden = true;
    }
    if(password != ''){
      this.page.password.error.hidden = true;
    }
    if(website != ''){
      this.page.site.error.hidden = true;
    }

    // OK - ready for push
    if(username != '' && password != '' && website != ''){
      var dateOptions = {day: 'numeric', month: 'numeric', year: 'numeric'};
      var date = new Date().toLocaleString('de-AU', dateOptions);

      let account: Account = new Account(0, website, username, password, date, info, 0, 0);

      // 0 is OK; 1 is error
      var error = "0";

      // check for all accounts this user has posted
      for (let i=0; i < this.accountHistory.length; i++){
        // If account already posted - error
        if(this.accountHistory[i].getUsername() == account.getUsername() && this.accountHistory[i].getPassword() == account.getPassword() && this.accountHistory[i].getWebsite() == account.getWebsite()){
          error = "1";
        }
      }
      if(error == "0"){
        this.accountHistory.push(account);
        this.accountService.sendAccounts(account);
      }
    }
  }
}
