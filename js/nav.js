const navLink = document.querySelectorAll('.nav__link');
const navCheckBox = document.querySelector('.nav__checkbox');

function deactivateNav() {
    
    if(navCheckBox.checked) {
        navCheckBox.checked = false;        
    }
}

navLink.forEach((link) => {

    link.addEventListener('click', deactivateNav);

}); 