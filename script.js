function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const moreInfoBtn = document.querySelector('.more-info-btn');
    const moreInfoText = document.querySelector('.more-info-text');

    moreInfoBtn.addEventListener('click', function () {
        moreInfoText.classList.toggle('show');
    });
});

function changeImage(mainImageId, newImageSrc) {
    document.getElementById(mainImageId).src = newImageSrc;
}

