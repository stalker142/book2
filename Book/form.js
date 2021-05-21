//
const form = document.forms['newContactForm'];
//создание нового контакта
form.addEventListener('submit', function(e){
    e.preventDefault();

    // Get all the form inputs
    const newName = form.querySelector('#name').value;
    const newPhone = form.querySelector('#phone').value;
    const newEmail = form.querySelector('#email').value;
    
    // Create new elements for the New User
    const addHeader = document.createElement('header');
    const addButton = document.createElement('button');
    const addContactDiv = document.createElement('div');
    const addOneDiv = document.createElement('div');
    const addUlDiv = document.createElement('div');
    const addUl = document.createElement('ul');
    const addFirstLi = document.createElement('li');
    const addSecondLi = document.createElement('li');
    const addThirdLi = document.createElement('li');

    const addFirstSpan = document.createElement('span');
    const addFirstSpanSpan = document.createElement('span');
    const addSecondSpan = document.createElement('span');
    const addSecondSpanSpan = document.createElement('span');
    const addThirdSpan = document.createElement('span');
    const addThirdSpanSpan = document.createElement('span');

    const addButtonDiv = document.createElement('div');
    const addFirstButton = document.createElement('button');
    const addSecondButton = document.createElement('button');
    const addThirdButton = document.createElement('button');

    // Append created Elements to the right Elements
    addHeader.appendChild(addButton);
    addHeader.appendChild(addContactDiv);

    addContactDiv.appendChild(addOneDiv);
    
    addOneDiv.appendChild(addUlDiv);
    addOneDiv.appendChild(addButtonDiv);

    addUlDiv.appendChild(addUl);
    addUl.appendChild(addFirstLi);
    addUl.appendChild(addSecondLi);
    addUl.appendChild(addThirdLi);

    addFirstLi.appendChild(addFirstSpan);
    addFirstLi.appendChild(addFirstSpanSpan);

    addSecondLi.appendChild(addSecondSpan);
    addSecondLi.appendChild(addSecondSpanSpan);

    addThirdLi.appendChild(addThirdSpan);
    addThirdLi.appendChild(addThirdSpanSpan);

    addButtonDiv.appendChild(addFirstButton);
    addButtonDiv.appendChild(addSecondButton);
    addButtonDiv.appendChild(addThirdButton);


    delete_btn.appendChild(addHeader);

    // Добавление содержимого в созданные элементы
    addButton.innerHTML = `${newName}<span>View</span>`;
    addFirstSpan.textContent = 'Name :';
    addSecondSpan.textContent = 'Phone :';
    addThirdSpan.textContent = 'Email :';

    addFirstSpanSpan.textContent = ` ${newName}`;
    addSecondSpanSpan.textContent = ` ${newPhone}`;
    addThirdSpanSpan.textContent = ` ${newEmail}`;
    
    addFirstButton.textContent = 'Edit';
    addSecondButton.textContent = 'Delete';
    addThirdButton.textContent = 'hide';


    //Установка атрибутов созданных элементов
    addContactDiv.setAttribute('class', 'contact');
    addOneDiv.setAttribute('class', 'one');
    addUl.setAttribute('id', 'ul');
    addButtonDiv.setAttribute('id', 'button');
    addFirstButton.setAttribute('class', 'edit');
    addSecondButton.setAttribute('class', 'delete');
    addThirdButton.setAttribute('class', 'hide');


    const hideContact = document.querySelectorAll('header button span');

    Array.from(hideContact).forEach(function(button){  
        
        button.addEventListener('click', function(e){
            const makeVisible = e.target.parentElement.nextElementSibling;
    
            makeVisible.style.display = 'block';        

        });
        
    });
    
});