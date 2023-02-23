import { LightningElement,api } from 'lwc';

export default class Lwc9 extends LightningElement {

// Expose a field to make it available in the template


// Flexipage provides recordId and objectApiName
@api recordId;
@api objectApiName;

}
