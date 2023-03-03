/*
Date:          2022-NOV-17
Version:       2.0
Author:        Prof. Paul Gruhn
Original Code: Murach's JavaScript & jQuery 4th Edition
Description:   Incorporates JavaScript field level validations and using localStorage
*/

"use strict";
// alert("This is the first line of JavaScript code.");        // Use for debuggin

const $ = selector => document.querySelector(selector); 



// ----------------------------------------------------------- START: Test Code for localStorage debugging
// localStorage.setItem("thisUserName","Fred Flintstone");                 // 'set' localStorage item 
 //alert("Test hardcoding localStorage thisUserName of Fred Flintstone");  // Use for debugging
// ----------------------------------------------------------- END: Test Code



// ----------------------------------------------------------- loads Function to displayErrorMsgs()
const displayErrorMsgs = msgs => {
     alert("displayErrorMsgs");     // Use this for debugging

    // ------------------------------------------------------- Create a new <ul> element
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    // --------------------------------- Create a new <li> element for each error message, add to ul
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    // if ul node isn't in document yet, add it
    const node = $("ul");
    if (node == null) {
        // get the form element 
        const form = $("form");

        // add ul to parent of form, before the form
        form.parentNode.insertBefore(ul, form);
    } else {
        // replace existing ul node
        node.parentNode.replaceChild(ul, node);
    }  
}

// ------------------------------------------------------- loads Function to processEntries()
const processEntries = () => {
     alert("processEntries - Validations");     // Use this for debugging

    // --------------------------------------------------- Get <form> values to check for validity
    const firstname    = $("#first_name");
    const lastname     = $("#last_name");
    const email        = $("#email");
    const intro        = $("#message");
    const experience   = $("#message2");
    const favoritegame = $("#favorite_game");
    const password     = $("#pswd");

    // --------------------------------------------------- Create array for error messages
    const msgs = [];

    // check user entries for validity
    if (firstname.value == "") {
        msgs[msgs.length] = "Please enter your first name.";
    } else {
        localStorage.setItem("thisUserName",firstname.value);   // 'set' localStorage item
    }
    if (lastname.value == "") {
        msgs[msgs.length] = "Please enter your last name."; 
    } 
    if (email.value == "") {
        msgs[msgs.length] = "Please enter your email.";
    } 
    if (intro.value == "") {
        msgs[msgs.length] = "Please give a brief introduction about yourself."; 
    }
    if (experience.value == "") {
        msgs[msgs.length] = "Please tell us your game development experience."; 
    }
    if (favoritegame.value == "") {
        msgs[msgs.length] = "Please enter your favorite game.";
    }
    if (password.value == "") {
        msgs[msgs.length] = "Please enter your password."; 
    }

    // ------------------------------------------------ Submit the form OR notify user of errors
    if (msgs.length == 0) {       // NO error messages, does 'submit' to php code to send emails
        alert("NO ERRORS");       // Use this for debugging
        $("form").submit(); 
    } else {                      // YES, there is error messages 
        alert("HAVE ERRORS!");    // Use this for debugging
        displayErrorMsgs(msgs);   // Display the error messages
        window.scrollTo(0, 0);    // Go to the top of the page
    }
};

// -------------------------------------------------------------- loads function to resetForm()
const resetForm = () => {
     alert("Resetting");        // Use this for debugging
    $("form").reset();            // Clears all the data from the form elements
    $("ul").remove();             // Remove error messages
    $("#first_name").focus();     // Move cursor to first_name textbox
};

// --------------------------------------------------------------- The DOM/webpage is loaded
document.addEventListener("DOMContentLoaded", () => {
   alert("DOMContentLoaded");                                      // Use for debugging    
  
   const thisUserName = localStorage.getItem("thisUserName");      // Get localStorage item  
   alert(thisUserName);                                            // Use for debugging
   
   if(thisUserName != null){
     alert("I AM NOT NULL:  " + thisUserName);                       // Use for debugging
     const thisGreeting = thisUserName.concat(", welcome back.") ;
     document.getElementById("greeting").innerHTML = thisGreeting;  // Displays the <h2> greeting here 
   } else {
      alert("I AM NULL!");                                          // Use for debugging
      document.getElementById("greeting").innerHTML = "Welcome to our website.";  // Displays the <h2> greeting here 
   }

   // ----------------------------------------------------------- Create event listeners
   $("#register").addEventListener("click", processEntries);      // Waiting for the "Register" button to be clicked
   $("#reset_form").addEventListener("click", resetForm);         // Waiting for the "Reset" button to be clicked
   $("#first_name").focus();                                      // Move cursor to first_name textbox 
});