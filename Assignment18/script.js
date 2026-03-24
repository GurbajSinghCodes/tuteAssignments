let greetContainer = document.querySelector("#greetContainer")
let button = document.querySelector("#greetButton")
let boxes = document.querySelectorAll(".box")
let input = document.querySelector("#input")
console.log(input);


function displayText() {
    let greetText = document.querySelector("#input").value
    greetText = greetText.charAt(0).toUpperCase() + greetText.slice(1);
    greetContainer.textContent = " ";
    let i = 0;

    // Taken help from AI just for the syntax about implementing the typewriter effect, not copy pasted but understood the logic for the same
    function type() {
        if (i < greetText.length) {
            greetContainer.textContent += greetText.charAt(i)
            i++;
            setTimeout(type, 100)
        }
    }
    type()
}


// Event listeners for Enter and button clicks
button.addEventListener("click", displayText)
input.addEventListener("keyup", (e) => {
    if (e.key === "Enter")
        displayText();
})

boxes.forEach((item) => {
    item.addEventListener("click", () => {
        item.style.backgroundColor = item.innerText;
        item.style.color = "rgb(210,210,210)"
    })
})

