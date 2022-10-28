
const heading = document.querySelector('h1');
heading.textContent = 'Belajar JavaScript Dasar';

var x = 10;
x = "Hello World"; // x is now a String
x = [1,2,3,4,5]; // x is now an Array
x = {firstName:"John", lastName:"Doe"}; // x is now an Object
x = true; // x is now a Boolean


function sayHello(VarName, alamat) {
    return "Hello " + VarName+", yang beralamat di " + alamat; // Hello Nugraha
}

const processBtn = document.querySelector("#process-btn");
processBtn.addEventListener("click", function() {
    const VarName = document.getElementById("name").value;
    const alamat = document.getElementById("address").value;
    const contents = document.querySelectorAll('.result>p');

    // let i = 1;
    // contents.forEach(function(content) {
    //     content.textContent = (i++)+"." +sayHello(VarName, alamat);
    // });
    for (let i=0; i<contents.length; i++) {
        let nomor = i+1;
        contents[i].textContent = nomor+". " +sayHello(VarName, alamat);
    }
});

const buttons = document.getElementsByTagName("button"); // Ini hasilnya jadi HTML Collection
const buttonClasses = document.getElementsByClassName("btn");

// for (let i=0; i<buttons.length; i++) {
//     console.log(buttons[i]);
// }

Array.from(buttons).forEach(function(btn) {
    // btn.style.background="red";
    // btn.style.border="unset";
    // btn.style.padding="10px 15px";
    btn.classList.add("btn-primary");
});