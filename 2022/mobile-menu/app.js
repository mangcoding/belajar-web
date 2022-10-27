const buttonMobile = document.querySelector('.mobile-btn');
const navigation = document.querySelector("nav");

buttonMobile.addEventListener("click", function(event) {
    this.classList.toggle('active');
    navigation.classList.toggle('active');
})