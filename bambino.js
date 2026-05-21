window.addEventListener("scroll",()=>{

    const image=document.querySelector(".breed-image-main");

    let value=window.scrollY*0.00015;

    image.style.transform=`scale(${1 + value})`;

    image.style.filter=`
    brightness(${0.96 + value * 12})
    contrast(1.03)
    saturate(1.04)
    `;

});