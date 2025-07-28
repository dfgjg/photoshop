const swiper = new Swiper('.swiper', {
    loop:true,
    
    navigation:{
        nextEl:'.swiper-btn-next',
        prevEl:'.swiper-btn-prev',
    },
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    }
})