const heading = document.getElementById('heading');
heading.textContent = "Welcome to JavasScript";

const contoh = document.getElementsByClassName('contoh');
var contoh2 = document.getElementsByClassName('contoh2');


for (let i = 0; i < contoh.length; i++) {
    contoh[i].textContent = (i+1)+". Selamat Belajar JavaScript ";
}

let i = 1;
Array.from(contoh2).forEach(function(el) {
    el.textContent = (i++)+". Belajar JavaScript ";
})

/* Menyeleksi Satu Element yang pertama berdasarkan class Name 'button-primary' */
const buttonPrimary = document.querySelectorAll('.button-primary');

/* Menyeleksi Semua Element berdasarkan class Name button-primary */
const buttonPrimaries = document.querySelectorAll('.button-primary');

// Element di looping
buttonPrimaries.forEach(function(button) {
    button.addEventListener('click', function() {
        alert('Hello JavasCript');
    });
});