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



window.addEventListener("scroll",()=>{

    const image=document.querySelector(".story-image-section img");

    let value=window.scrollY*0.00015;

    image.style.transform=`scale(${1 + value})`;

    image.style.filter=`
    brightness(${0.92 + value * 0.35})
    `;

});