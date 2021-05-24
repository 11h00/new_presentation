ScrollReveal().reveal('.menubutton', { delay: 500, reset: true });
let validate_sound = new Audio("sounds/validateclick.mp3");
let focussound = new Audio("sounds/focus.ogg");

let buttonslist = document.querySelectorAll("button.menubutton");


buttonslist.forEach(button => {
    button.addEventListener('click', (action) => {
        validate_sound.cloneNode(1).play()
        switch(action.currentTarget.attributes.bid.value){
            case "exit": window.location.href = "https://www.google.com/";break;
        }
    })
    button.addEventListener("focus", () => {
        focussound.cloneNode(1).play()
    })
})