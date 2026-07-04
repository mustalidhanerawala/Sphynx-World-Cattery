/*==========================================
    HAMBURGER MENU
==========================================*/

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if(menuBtn && navMenu){

    menuBtn.addEventListener("click",()=>{

        menuBtn.classList.toggle("active");
        navMenu.classList.toggle("open");

    });

}

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        if(window.innerWidth<=768){

            menuBtn.classList.remove("active");
            navMenu.classList.remove("open");

        }

    });

});

/*==========================================
    ARTICLE SEARCH
==========================================*/

const searchInput=document.getElementById("searchInput");
const cards=document.querySelectorAll(".blog-card");

if(searchInput){

    searchInput.addEventListener("keyup",()=>{

        const value=searchInput.value.toLowerCase();

        cards.forEach(card=>{

            const text=card.innerText.toLowerCase();

            if(text.includes(value)){

                card.style.display="flex";

            }else{

                card.style.display="none";

            }

        });

    });

}

/*==========================================
    CATEGORY FILTER
==========================================*/

const buttons=document.querySelectorAll(".category");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        buttons.forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        const filter=button.dataset.filter;

        cards.forEach(card=>{

            if(filter==="all" || card.dataset.category===filter){

                card.style.display="flex";

            }else{

                card.style.display="none";

            }

        });

    });

});

/*==========================================
    LOAD MORE
==========================================*/

const loadBtn=document.getElementById("loadMore");

let visible=9;

function updateCards(){

    cards.forEach((card,index)=>{

        if(index<visible){

            card.classList.remove("hidden");

        }else{

            card.classList.add("hidden");

        }

    });

    if(loadBtn && visible>=cards.length){

        loadBtn.style.display="none";

    }

}

if(loadBtn){

    updateCards();

    loadBtn.addEventListener("click",()=>{

        visible+=9;

        updateCards();

    });

}

/*==========================================
    BACK TO TOP
==========================================*/

const topBtn=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

    if(!topBtn) return;

    if(window.scrollY>500){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});

if(topBtn){

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}