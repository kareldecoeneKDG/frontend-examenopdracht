// Constant reference to a function
const navSlide = () => {

    // Select HTML tags
    const burger = document.querySelector('.nav__burger');
    const nav = document.querySelector('.nav__links');
    const navLinks = document.querySelectorAll('.nav__links li');
    
    // Add eventlistener to the hamburger button to display mobile menu
    burger.addEventListener('click', ()=>{

        // Toggle nav by toggling the class value
        nav.classList.toggle('nav__links--active');

        // Animate links
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 9 + 0.5}s`;
            }
        });

        // Burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();