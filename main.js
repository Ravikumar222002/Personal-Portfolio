   //navbar scroll effect

   var nav = document.querySelector(".navbar");

   window.onscroll = function()
   {
     if (document.documentElement.scrollTop > 20)
     {
       nav.classList.add("header-scrolled");
     }
     else
     {
       nav.classList.remove("header-scrolled");
     }

   }

   //menu collapse effect

   var navbar = document.querySelectorAll(".nav-link");
   var navCollapse = document.querySelector(".collapse.navbar-collapse");

   navbar.forEach(function(a) {

     a.addEventListener("click", function() {

       navCollapse.classList.remove("show");
     })


   })

   //auto type js code

   var typed = new Typed("#auto-complete", {

       strings: ["Ravi Kumar.", "Front End Developer.", "Learner."],
       typeSpeed: 100,
       backSpeed: 100,
       loop: true

     })
