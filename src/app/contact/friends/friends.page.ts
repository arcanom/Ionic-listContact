import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  contacts: Contact[]
  friend: any[] = []
  constructor(private contactService :  ContactService) { }

  ngOnInit() {
    this.contacts =  this.contactService.getContacts
    for(let i=0;i< this.contacts.length;i++){
      if(this.contacts[i].category === "Friend"){
        this.friend  = [...this.friend, this.contacts[i]]
      }
    }
    console.log(this.friend)
  }
  }


