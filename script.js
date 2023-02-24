let menu  = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');//to chnge the bar in cross shape on clicking
    navbar.classList.toggle('active'); //to show menu on clicking the bars
}

//to remove both operation performed above in window size not for tab or mobile size
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active'); 
};

//on clicking small img it will replace with big one 
document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () =>{
        var src =images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    }
});


//for swiping reviews itself
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
  
    clickable: true,
    },
    loop : true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
    },
});