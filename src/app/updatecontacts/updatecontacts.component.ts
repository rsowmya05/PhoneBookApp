import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Contact } from '../model/contact';
import { ContactService } from '../services/contact.service';


@Component({
  selector: 'app-updatecontacts',
  templateUrl: './updatecontacts.component.html',
  styleUrls: ['./updatecontacts.component.css']
})
export class UpdatecontactsComponent implements OnInit {

  // contact:Contact;
  // constructor(private contactService:ContactService) { 
  //   this.contact=new Contact();
  // }

  // ngOnInit(): void {
  // }

  // updateContact(name:any){
  //   this.contactService.updateContact(name.value,this.contact);
  // }
//}
contact:Contact;
  title = 'angularpopup';
  showModal: boolean=true;
  registerForm: FormGroup;
  submitted = false;
  constructor(private contactService:ContactService,private formBuilder: FormBuilder) { 
    this.contact=new Contact();
    this.registerForm=formBuilder.group({})
  }
  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        // name: ['', [Validators.required,RxwebValidators.unique()]],
        name: ['', Validators.required],
        mobile: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(10)]]
    });
}

get f() { 
  return this.registerForm.controls;
}
onSubmit(name:any) {
    
    this.contactService.updateContact(name.value,this.contact);
    this.submitted = true;
   
    if (this.registerForm.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.showModal = false;
    }
   
}
}


