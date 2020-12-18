import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from './model/contact';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts:Contact[];
  searchContact:string="";
  title = 'MiniProject';
  showModal: boolean=true;

  constructor(private contactService:ContactService,private route:Router){
    this.contacts=this.contactService.displayContacts();
  }

  // show()
  // {
  //   this.showModal = true;    
  // }

  add(){
    // this.showModal = true;    
    this.route.navigate(["add"])
  }

  update(){
    this.route.navigate(["update"])
  }

  deleteContact(name:any){

    for (let index = 0; index < this.contacts.length; index++) {
      if(this.contacts[index].name==name){
          this.contacts.splice(index,1);
          break;
      }            
    }
  }

}
