import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts : Contact[] = [
    {
      "id": 1,
      "firstName": "Adeline",
      "lastName": "Torres",
      "email": "adeline.torres@example.tv",
      "phone": "+1 (887) 512-3630",
      "category": "Family"
    },
    {
      "id": 2,
      "firstName": "Emily",
      "lastName": "Sellers",
      "email": "emily.sellers@example.io",
      "phone": "+1 (981) 551-3390",
      "category": "Friend"
    },
    {
      "id": 3,
      "firstName": "Schwartz",
      "lastName": "Burch",
      "email": "schwartz.burch@example.us",
      "phone": "+1 (990) 433-2436",
      "category": "Family"
    },
    {
      "id": 4,
      "firstName": "Espinoza",
      "lastName": "Mendoza",
      "email": "espinoza.mendoza@example.net",
      "phone": "+1 (896) 522-3636",
      "category": "Family"
    },
    {
      "id": 5,
      "firstName": "Wade",
      "lastName": "Carroll",
      "email": "wade.carroll@example.biz",
      "phone": "+1 (821) 445-2844",
      "category": "Family"
    },
    {
      "id": 6,
      "firstName": "Conner",
      "lastName": "Holt",
      "email": "conner.holt@example.biz",
      "phone": "+1 (901) 587-2356",
      "category": "Friend"
    },
    {
      "id": 7,
      "firstName": "Barron",
      "lastName": "Miller",
      "email": "barron.miller@example.com",
      "phone": "+1 (981) 467-3370",
      "category": "Family"
    },
    {
      "id": 8,
      "firstName": "Ratliff",
      "lastName": "Calderon",
      "email": "ratliff.calderon@example.me",
      "phone": "+1 (900) 492-2693",
      "category": "Family"
    },
    {
      "id": 9,
      "firstName": "Bonnie",
      "lastName": "Doyle",
      "email": "bonnie.doyle@example.co.uk",
      "phone": "+1 (989) 425-2126",
      "category": "Family"
    },
    {
      "id": 10,
      "firstName": "Aisha",
      "lastName": "Goodwin",
      "email": "aisha.goodwin@example.org",
      "phone": "+1 (925) 509-2910",
      "category": "Family"
    },
    {
      "id": 11,
      "firstName": "Joy",
      "lastName": "Moody",
      "email": "joy.moody@example.name",
      "phone": "+1 (846) 467-2318",
      "category": "Friend"
    },
    {
      "id": 12,
      "firstName": "Angelia",
      "lastName": "Ramsey",
      "email": "angelia.ramsey@example.tv",
      "phone": "+1 (956) 496-2050",
      "category": "Family"
    },
    {
      "id": 13,
      "firstName": "Lenore",
      "lastName": "Salinas",
      "email": "lenore.salinas@example.ca",
      "phone": "+1 (901) 419-3446",
      "category": "Family"
    },
    {
      "id": 14,
      "firstName": "Contreras",
      "lastName": "Mckay",
      "email": "contreras.mckay@example.io",
      "phone": "+1 (941) 501-3787",
      "category": "Family"
    },
    {
      "id": 15,
      "firstName": "Newton",
      "lastName": "Waters",
      "email": "newton.waters@example.us",
      "phone": "+1 (956) 440-2308",
      "category": "Friend"
    },
    {
      "id": 16,
      "firstName": "Latisha",
      "lastName": "Roy",
      "email": "latisha.roy@example.net",
      "phone": "+1 (911) 581-3054",
      "category": "Family"
    },
    {
      "id": 17,
      "firstName": "Peggy",
      "lastName": "Mathis",
      "email": "peggy.mathis@example.biz",
      "phone": "+1 (813) 523-3437",
      "category": "Friend"
    },
    {
      "id": 18,
      "firstName": "Peters",
      "lastName": "May",
      "email": "peters.may@example.biz",
      "phone": "+1 (975) 569-3146",
      "category": "Friend"
    },
    {
      "id": 19,
      "firstName": "Mccoy",
      "lastName": "Ortega",
      "email": "mccoy.ortega@example.com",
      "phone": "+1 (883) 588-2107",
      "category": "Family"
    },
    {
      "id": 20,
      "firstName": "Barlow",
      "lastName": "Santana",
      "email": "barlow.santana@example.ca",
      "phone": "+1 (988) 598-3584",
      "category": "Friend"
    }
  ]

  get getContacts(){
    return [...this.contacts]
  }

  constructor() { }
}
