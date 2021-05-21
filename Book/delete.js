//
const delete_btn = document.querySelector('#section_activeContacts');

//удаление контакта и закрывание выплывающего меню
delete_btn.addEventListener('click', function(e){
       //удаление контакта
    if (e.target.className === "delete") {
        const btn = e.target.parentElement.parentElement.parentElement.parentElement;
        btn.parentNode.removeChild(btn);
        //закрывание выплывающего меню
    } else if (e.target.className === "hide") {
        const hide = e.target.parentElement.parentElement.parentElement;
        hide.style.display = 'none';
    }
});