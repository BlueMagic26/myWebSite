// Gönder Buton
let gonderButon = document.querySelector(".submitButon");

gonderButon.addEventListener("click", gonder);

function gonder(){
    alert("Lütfen iletişim için e-posta adresini kullanınız.")
}

// Owl Carousel
const nexticon = '<i class="fa-solid fa-angle-right"></i>';
const previcon = '<i class="fa-solid fa-angle-left"></i>';

$('.homeSlider').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    navText: [previcon, nexticon],
    stagePadding: 50,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:1
        }
    }
})

