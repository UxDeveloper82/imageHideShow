document.addEventListener('DOMContentLoaded', function () {
    let handle = document.getElementById('handle');
    let photo = document.getElementById('photo');
    let footer = document.getElementById('footer');

    handle.addEventListener('click', toggleImage);

    function toggleImage() {
        if (handle.innerHTML === '+') {
            photo.style.opacity = '1';
            footer.style.opacity = '1';
            handle.innerHTML = '-';
        } else {
            footer.style.opacity = '0';
            photo.style.opacity = '0';
            handle.innerHTML = '+';
        }
    }
});