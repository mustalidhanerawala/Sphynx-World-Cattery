const slides=document.querySelectorAll('.slide');
const dots=document.querySelectorAll('.dot');
const next=document.querySelector('.next');
const prev=document.querySelector('.prev');

let current=0;

function showSlide(index){

slides.forEach(slide=>slide.classList.remove('active'));
dots.forEach(dot=>dot.classList.remove('active'));

slides[index].classList.add('active');
dots[index].classList.add('active');

}

next.addEventListener('click',()=>{

current++;

if(current>=slides.length){
    current=0;
}

showSlide(current);

});

prev.addEventListener('click',()=>{

current--;

if(current<0){
    current=slides.length-1;
}

showSlide(current);

});

setInterval(()=>{

current++;

if(current>=slides.length){
    current=0;
}

showSlide(current);

},4000);

const cards = document.querySelectorAll('.kitten-card');

cards.forEach((card,index)=>{

    card.style.opacity='0';
    card.style.transform='translateY(60px)';

    setTimeout(()=>{

        card.style.transition='0.8s';
        card.style.opacity='1';
        card.style.transform='translateY(0)';

    },index*180);

});