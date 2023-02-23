import { LightningElement , api} from 'lwc';

export default class Lwc8 extends LightningElement {

    // Expose a field to make it available in the template
    fields = ["Name","Title","Phone","Email","Department","Company"];

    // Flexipage provides recordId and objectApiName
    @api recordId;
    @api objectApiName;
}
