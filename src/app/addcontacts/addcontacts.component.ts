import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../model/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-addcontacts',
  templateUrl: './addcontacts.component.html',
  styleUrls: ['./addcontacts.component.css']
})

export class AddcontactsComponent implements OnInit {

  // contact:Contact;
  // constructor(private contactService:ContactService) { 
  //   this.contact=new Contact();
  // }

  // ngOnInit(): void {
  // }

  // createContact(){
  //   this.contactService.addContact(this.contact);
  //   this.contact=new Contact();

  // }

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
    this.showModal = true; 
    
  }
  
  hide()
  {
    this.showModal = false;
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        name: ['', Validators.required],
        mobile: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(10)]]
    });
}

get f() { 
  return this.registerForm.controls; 
}

onSubmit() {
    
    this.contactService.addContact(this.contact);
    this.contact=new Contact();
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

