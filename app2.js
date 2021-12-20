const contactsData = [
    {
        fname: "Anbu",
        lname: "Arasan",
        phone: "190-309-6101",
        email: "anbu.arasan@email.com",
    },
    {
        fname: "Arivu",
        lname: "Mugilan",
        phone: "490-701-7102",
        email: "arivu.mugilan@email.com",
    },
    {
        fname: "Bob",
        lname: "Johnson",
        phone: "574-909-3948",
        email: "bob.johnson@email.com",
    },
    {
        fname: "Raja",
        lname: "Tamil",
        phone: "090-909-0101",
        email: "raja.tamil@email.com",
    },
    {
        fname: "Sundar",
        lname: "Kannan",
        phone: "090-909-0101",
        email: "sundar.kannan@email.com",
    },
];

class AddressBookView {
    init() {
        console.log("Render HTML here");
        this.renderContactListModule();
    }

}

const addressBookView = new AddressBookView();

class AddressBookCtrl {
    constructor(addressBookView) {
        this.addressBookView = addressBookView;
    }
    init() {
        this.addressBookView.init();
    }

    getContacts() {
        return contactsData;
    }

    renderContactListModule() {
        //get all contacts and assign to contacts 
        const contacts = addressBookApp.getContacts();
    // cache #contact-list DOM 
        const $contactListUI = document.getElementById('contact-list');
    // clear HTML from the DOM 
        $contactListUI.innerHTML = '';
    for (let i = 0, len = contacts.length; i < len; i++) {
            let $li = document.createElement('li');
            $li.setAttribute('class', 'contact-list-item');
            $li.setAttribute('data-index', i);
            $li.innerHTML = `${contacts[i]['fname']},${contacts[i]['lname']}`;
            $contactListUI.append($li);
        }
    }
}




const addressBookApp = new AddressBookCtrl(addressBookView);

addressBookApp.init();