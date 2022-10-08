const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");



        /* Js'de mouse hover oldugunda yapılacak islem icin kullanilir */
left.addEventListener('mouseenter', () =>{
    container.classList.add('hover-left')
})

left.addEventListener('mouseleave', () =>{
    container.classList.remove('hover-left');
})

right.addEventListener('mouseenter', () =>{
    container.classList.add('hover-right')
})

right.addEventListener('mouseleave', () =>{
    container.classList.remove('hover-right')
})