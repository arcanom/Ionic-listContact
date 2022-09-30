import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {


  segment = "default"
  contacts: Contact[]
  constructor(private contactService : ContactService) { }

  ngOnInit() {
    this.contacts =  this.contactService.getContacts
    console.log(this.contacts)
  }

}
