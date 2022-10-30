const heading = document.getElementById("heading");
const content = document.querySelector("p");

//Ini dipakai untuk mengubah isi dari heading
heading.textContent = "Welcome to JavaScript";
content.textContent = "Belajar JavaScript itu mudah";

/*
    Menyeleksi Satu Element yang pertama berdasarkan class Name 'button-primary'
*/

var xyz = "Belajar JavaScript itu mudah";
xyz = 10; 
xyz = true;
xyz = null;
xyz = [1,2,3,4,5];
xyz = {a:1, b:2, c:3};

xyz = function() {return "Hello JavaScript"};

function tes() {
    let abc = 10;
    console.log(abc);
}

// console.log(abc);

const phi = 3.14;

const person = {
    "name" : "Ahmad",
    "umur" : "23 tahun",
    "warnaMata" : "hijau"
}


function hitungUmur(tahunLahir) {
    return 2022 - tahunLahir;
}

let umur = hitungUmur(1993);
console.log(umur+" tahun");