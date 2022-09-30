import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-familly',
  templateUrl: './familly.page.html',
  styleUrls: ['./familly.page.scss'],
})
export class FamillyPage implements OnInit {
  contacts: Contact[]
  familly: any[] = []
  constructor(private contactService :  ContactService) { }

  ngOnInit() {
    this.contacts =  this.contactService.getContacts
    for(let i=0;i< this.contacts.length;i++){
      if(this.contacts[i].category === "Family"){
        this.familly  = [...this.familly, this.contacts[i]]
      }
    }
    console.log(this.familly)
  }

}
