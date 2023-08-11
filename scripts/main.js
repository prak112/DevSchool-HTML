// source html - cat_index.html
// modify header
const myHeading = document.querySelector("h1");
myHeading.textContent = "Introducing... The Super Cats!";

// add click event to list elements
document.querySelector("ul").addEventListener("click", () => {
    alert("..and You have touched Greatness! Cat-Lord blesses You!");
});
