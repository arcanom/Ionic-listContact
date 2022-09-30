import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';
import { FamillyPage } from './familly/familly.page';
import { FriendsPage } from './friends/friends.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactPageRoutingModule
  ],
  declarations: [ContactPage, FamillyPage, FriendsPage]
})
export class ContactPageModule {}
