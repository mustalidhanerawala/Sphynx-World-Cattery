/*==========================================
    HAMBURGER MENU
==========================================*/
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if(menuBtn && navMenu){

    menuBtn.addEventListener("click",()=>{

        menuBtn.classList.toggle("active");
        navMenu.classList.toggle("active");

    });

}

/*==========================================
    CLOSE MENU AFTER CLICK
==========================================*/

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        if(window.innerWidth<=768){

            menuBtn.classList.remove("active");
            navMenu.classList.remove("open");

        }

    });

});

/*==========================================
    FAQ
==========================================*/

document.querySelectorAll(".faq-item").forEach(item=>{

    const btn=item.querySelector(".faq-question");

    btn.addEventListener("click",()=>{

        const open=document.querySelector(".faq-item.active");

        if(open && open!==item){

            open.classList.remove("active");
            open.querySelector(".faq-answer").style.maxHeight=null;

        }

        item.classList.toggle("active");

        const answer=item.querySelector(".faq-answer");

        if(item.classList.contains("active")){

            answer.style.maxHeight=answer.scrollHeight+"px";

        }else{

            answer.style.maxHeight=null;

        }

    });

});



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

/*==========================================
    ACTIVE TABLE OF CONTENTS
==========================================*/

const sections=document.querySelectorAll(".blog-content section");

const tocLinks=document.querySelectorAll(".toc a");

const tocObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            tocLinks.forEach(link=>{

                link.classList.remove("active");

                if(link.getAttribute("href")==="#"+entry.target.id){

                    link.classList.add("active");

                }

            });

        }

    });

},{
    rootMargin:"-35% 0px -55% 0px"
});

sections.forEach(section=>{

    tocObserver.observe(section);

});

/*==========================================
    SMOOTH TOC SCROLL
==========================================*/

tocLinks.forEach(link=>{

    link.addEventListener("click",e=>{

        e.preventDefault();

        const id=link.getAttribute("href");

        const target=document.querySelector(id);

        if(!target) return;

        window.scrollTo({

            top:target.offsetTop-100,

            behavior:"smooth"

        });

    });

});

/*==========================================
    IMAGE FADE IN
==========================================*/

document.querySelectorAll("img").forEach(img=>{

    if(img.complete){

        img.style.opacity=1;

    }else{

        img.style.opacity=0;

        img.onload=()=>{

            img.style.transition="opacity .4s";

            img.style.opacity=1;

        };

    }

});

/*==========================================
    HEADER SHADOW
==========================================*/

const header=document.querySelector(".article-header");

window.addEventListener("scroll",()=>{

    if(!header) return;

    if(window.scrollY>40){

        header.style.boxShadow="0 8px 25px rgba(0,0,0,.45)";

    }else{

        header.style.boxShadow="none";

    }

});
