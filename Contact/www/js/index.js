                
document.addEventListener("deviceready", loadContacts, false);

function loadConctact() {
   let options = new ContactFindOptions();
   options.filter = "resp";
   options.multiple = true;
   options.hasPhoneNumber = true;
   let field = ['name'];

   navigator.contacts.find(fields,showContacts, handlerError, options )
}

function showContacts(contacts) {
    let code = "";

    for (let i = 0; i < contacts.length; i++){
        code += '';

        <li>
            <a href="#" >
                <img src="images/avatar.jpg" alt="photo de profil du contact"></img>
                <h1>${contacts[i].name.formatted}</h1>
                <p>${contacts[i].hasPhoneNumbers[0].value}</p>
            </a>
        </li>
        
    }
    contactlist.innerHTML = code;
    $(contactlist).listview('refresh');
}

function handlerError(error){
    console.log(error);
    alert('une erreur inattendue s\'est produit');
}
