const reveals=document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{

    reveals.forEach(reveal=>{

        const top=reveal.getBoundingClientRect().top;

        const windowHeight=window.innerHeight;

        if(top<windowHeight-100){
            reveal.classList.add('active');
        }

    });

});

const hamburger = document.getElementById("hamburger");

const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click",()=>{

    mobileNav.classList.toggle("active");

});

