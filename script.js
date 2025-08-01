const swiper = new Swiper('.swiper', {
    loop:true,
    
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    }
})
let goods = document.querySelector('.goods img')
let catsBucket = document.querySelectorAll('.add-to-bucket')
let price = document.querySelector('.goods-price')
let count = document.querySelector('.count-span')

for (let i = 0; i<catsBucket.length; i+=1){
    catsBucket[i].addEventListener('click',function(){
        count.innerHTML = +count.innerHTML + 1
    })
}