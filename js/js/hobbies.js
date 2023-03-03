const toggle = evt => {
    const h2_element = evt.currentTarget;
    const div_element = h2_element.nextElementSibling;

    h2_element.classList.toggle("minus");
    div_element.classList.toggle("open");

    evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
    const h2_elements = document.querySelectorAll("#hobbies h2");

    for (let h2_element of h2_elements) {
        h2_element.addEventListener("click", toggle);
    }

    h2_elements[0].firstChild.focus();
});