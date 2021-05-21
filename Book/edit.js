//
const edit = document.querySelector('#section_activeContacts');

//изменние контакта
edit.addEventListener('click', function(e){

    if ( e.target.className === "edit") {
        const edit_form = document.getElementById('editDetails');
        const details = e.target.parentElement.previousElementSibling.children[0].children;

        //
        let name = details[0].children[1];
        let phone = details[1].children[1];
        let email = details[2].children[1];




        const editForm = document.forms['editForm'];
        
        // get the input children of the editform
        const editName = editForm.children[2];
        const editPhone = editForm.children[4];
        const editEmail = editForm.children[6];

        //set attributes
        editName.setAttribute('value', name.textContent);
        editPhone.setAttribute('value', phone.textContent);
        editEmail.setAttribute('value', email.textContent);
        

        editForm.addEventListener('submit', function(e){
            e.preventDefault();

            name.textContent = editName.value;
            phone.textContent = editPhone.value;
            email.textContent = editEmail.value;

            edit_form.style.display = 'none';
        });
        
        edit_form.style.display = 'inline-block';


    }

        
});