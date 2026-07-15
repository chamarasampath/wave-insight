document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        let page = this.getAttribute("href");

        // Only smooth scroll for same-page links
        if(page.startsWith("#")){

            e.preventDefault();

            let target = document.querySelector(page);

            if(target){

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }

        }

    });

});



// Header shadow when scrolling

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");


    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 5px 25px rgba(0,0,0,0.5)";

    }

    else{

        header.style.boxShadow="none";

    }

});




// Feature card animation

const cards=document.querySelectorAll(".card");


const observer=new IntersectionObserver(entries=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform=
            "translateY(0)";

        }


    });


},{threshold:0.2});




cards.forEach(card=>{


    card.style.opacity="0";

    card.style.transform=
    "translateY(40px)";

    card.style.transition=
    "0.8s ease";


    observer.observe(card);


});




// Wave pulse effect

const menuToggle=document.getElementById("menuToggle");

const mobileMenu=document.getElementById("mobileMenu");

const menuOverlay=document.getElementById("menuOverlay");

const closeMenu=document.getElementById("closeMenu");

menuToggle.onclick=function(){

    mobileMenu.classList.add("active");

    menuOverlay.classList.add("active");

}

closeMenu.onclick=function(){

    mobileMenu.classList.remove("active");

    menuOverlay.classList.remove("active");

}

menuOverlay.onclick=function(){

    mobileMenu.classList.remove("active");

    menuOverlay.classList.remove("active");

}

document.querySelectorAll("#mobileMenu a").forEach(item=>{

    item.onclick=function(){

        mobileMenu.classList.remove("active");

        menuOverlay.classList.remove("active");

    }

});