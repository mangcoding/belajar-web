const heading = document.getElementById("heading");
heading.textContent = "Welcome to JavaScript";
heading.style.backgroundColor = "red";

// const buttons = document.getElementsByTagName("button");
const buttons = document.getElementsByClassName("btn");
for (let i=0; i<buttons.length; i++) {
    buttons[i].style.backgroundColor = "green";
}

Array.from(buttons).forEach(function(el) {
    el.style.color = "white";
});

const paragraph = document.querySelector("p");
paragraph.textContent = "Belajar JavaScript itu mudah";

const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(function(para) {
    para.textContent = "Belajar JavaScript itu mudah";
});

