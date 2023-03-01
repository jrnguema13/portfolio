/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

$("#register").click( evt => {
    let isValid = true;

    // validate the first email address
    const emailPattern = 
        /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const email1 = $("#emai").val().trim();
    if (email1 == "") { 
        $("#email").next().text("This field is required.");
        isValid = false;
    } else if ( !emailPattern.test(email1) ) {
        $("#email").next().text("Must be a valid email address.");
        isValid = false;
    } else {
        $("#email").next().text("");
    }
    $("#email").val(email1);})


$(document).ready( () => {
    const firstName = $("#name").val().trim();
        if (firstName == "") {
            $("#name").next().text("This field is required.");
            isValid = false;
        } else {
            $("#name").next().text("");
        }
        $("#name").val(firstName);

        
})


window.addEventListener('DOMContentLoaded', event => {
    

    // -------------------------------------------------------------------------Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    

    // ----------------------------------------------------------Shrink the navbar 
    navbarShrink();

    //----------------------------------------------------- Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // ----------------------------------------------------Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // ------------------------------------------------Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // ---------------------------------------------------------Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    
    //------------------------------------------------------------------------COOKIE SECTION
    const cookieBox = document.querySelector(".wrapper"),
    acceptBtn = cookieBox.querySelector("button");

    acceptBtn.onclick = ()=>{
      //setting cookie for 1 month, after one month it'll be expired automatically
      document.cookie = "CookieBy=CodingNepal; max-age="+60*60*24*30;
      if(document.cookie){ //if cookie is set
        cookieBox.classList.add("hide"); //hide cookie box
      }else{ //if cookie not set then alert an error
        alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
      }
    }
    let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal"); //checking our cookie
    //if cookie is set then hide the cookie box else show it
    checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");
  

});

const processEntries = () => {

    if (msgs.length == 0) {       // NO error messages, does 'submit' to php code to send emails
        alert("NO ERRORS");       // Use this for debugging
        $("contactForm").register(); 
    } else {                      // YES, there is error messages 
        alert("HAVE ERRORS!");    // Use this for debugging
        displayErrorMsgs(msgs);   // Display the error messages
        window.scrollTo(0, 0);    // Go to the top of the page
    }
};
