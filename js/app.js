let photo = document.querySelector('#photo');
let submit = document.querySelector('#submit');
let email = document.querySelector('.email-address');
let error = document.querySelector('.error');
let invalid = document.querySelector('.invalid-email');
let valid = document.querySelector('.valid-email');
let form = document.querySelector('form');


function getPhoto(e) {
    if (e.target.innerWidth <= 525) {
        photo.src = "../images/hero-mobile.jpg";
    } else {
        photo.src = "../images/hero-desktop.jpg";
    }
}

function checkEmail(e) {
    e.preventDefault();
    console.log('checkEmail');
    var email = document.querySelector('.email-address');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    error.style.display = "block";
    invalid.style.display = "block";
    valid.style.display = "none";
    form.style.borderColor = "#F96464";
    email.focus;
    return false;
 } else {
    error.style.display = "none";
    invalid.style.display = "none";
    valid.style.display = "block";
    form.style.borderColor = "#CE9797";
    email.focus;
    email.value = "";
    return false;
 }

}


window.addEventListener('resize', getPhoto);
submit.addEventListener('click', checkEmail);