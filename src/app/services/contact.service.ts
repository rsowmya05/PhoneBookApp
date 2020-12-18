import { Contact } from "../model/contact";

export class ContactService{
    contacts:Contact[];

    constructor(){
        this.contacts=[
            new Contact("Sowmya","9870654321"),
            new Contact("Aishu","9887654231"),
            new Contact("Swetha","9098786552"),
            new Contact("Pooja","9809873562")
        ];
    }

    displayContacts():Contact[]{
        return this.contacts;
    }

    addContact(contact:Contact){
        this.contacts.push(contact);
        console.log(this.contacts);
    }

    removeContact(name:any){
        for (let index = 0; index < this.contacts.length; index++) {
            if(this.contacts[index].name==name){
                this.contacts.splice(index,1);
                break;
            }            
        }
    }

    updateContact(name:string,contact:Contact){
        for (let index = 0; index < this.contacts.length; index++) {
            if(this.contacts[index].name==name){
                this.contacts[index]=contact; 
                // break;
            }            
        }
    }
}