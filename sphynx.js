window.addEventListener("scroll",()=>{

    const hero=document.querySelector(".breed-hero");
    const image=document.querySelector(".breed-hero img");

    let value=window.scrollY*0.00035;

    hero.style.transform=`scale(${1 + value})`;

    image.style.transform=`scale(${1 + value})`;

});