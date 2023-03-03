"use strict";

const $ = selector => document.querySelector(selector); 

const displayErrorMsgs = msgs => {
    // alert("displayErrorMsgs");     // Use this for debugging

    // create a new ul element
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    // create a new li element for each error message, add to ul
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

const processEntries = () => {
    // alert("processEntries - Validations");     // Use this for debugging

    // get form controls to check for validity
    const firstname    = $("#first_name");
    const lastname     = $("#last_name");
    const email        = $("#email");
    const intro        = $("#message");
    const experience   = $("#message2");
    const favoritegame = $("#favorite_game");
    const password     = $("#pswd");

    // create array for error messages
    const msgs = [];

    // check user entries for validity
    if (firstname.value == "") {
        msgs[msgs.length] = "Please enter your first name.";
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

    // submit the form OR notify user of errors
    if (msgs.length == 0) {       // NO, error messages, the code does 'submit' php code sends the emails
        alert("NO ERRORS");    // Use this for debugging
        $("form").submit(); 
    } else {                      // YES, error messages,  and 
        alert("HAVE ERRORS!"); // Use this for debugging
        displayErrorMsgs(msgs);   // Display the error messages
        window.scrollTo(0, 0);    // Go to the top of the page
    }
};

const resetForm = () => {
    // alert("Resetting");        // Use this for debugging
    $("form").reset();            // Clears all the data from the form elements
    $("ul").remove();             // Remove error messages
    $("#first_name").focus();     // Move cursor to first_name textbox
};

document.addEventListener("DOMContentLoaded", () => {
    // alert("DOMContentLoaded");                               // Use this for debugging
    $("#register").addEventListener("click", processEntries);   // Waiting for the "Register" button to be clicked
    $("#reset_form").addEventListener("click", resetForm);      // Waiting for the "Reset" button to be clicked
    $("#first_name").focus();                                   // Move cursor to first_name textbox 
});