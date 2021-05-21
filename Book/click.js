//
const hideContact = document.querySelectorAll('header button span');
//нажатие клавиш
Array.from(hideContact).forEach(function(button){
    
    button.addEventListener('click', function(e){
        const makeVisible = e.target.parentElement.nextElementSibling;

        makeVisible.style.display = 'block';  
    });
    
});