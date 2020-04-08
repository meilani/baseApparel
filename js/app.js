let photo = document.querySelector('#photo');

function getPhoto(e) {
    if (e.target.innerWidth <= 525) {
        photo.src = "../images/hero-mobile.jpg";
    } else {
        photo.src = "../images/hero-desktop.jpg";
    }
}

window.addEventListener('resize', getPhoto);