let header = document.querySelector("h1");
let button = document.querySelector("button");
let img = document.querySelector("img");

// 1. Press the button on the webpage to change it up! Take notice of what happens.
// - What do you think innerHTML does?
// - What do you think .src does?


// 2. Try the following:
// - Make it so that the header says your name when the button is clicked.
// - Change the src of the image to something random.
button.addEventListener("click", function() {
    header.innerHTML = "Brianna :D";
    img.src = "https://media2.giphy.com/media/WTL02R1L7YCGUEunFy/200w.gif?cid=6c09b9523drdvi6m3jhqq7ftobcfca0r8fvp5d2p1cptzn76&ep=v1_gifs_search&rid=200w.gif&ct=g";
});


