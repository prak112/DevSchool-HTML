// source html - cat_index.html
// modify header
const myHeading = document.querySelector("h1");
myHeading.textContent = "Introducing... The Super Cats!";

// sample click event to list elements
document.querySelector("ul").addEventListener("click", () => {
    alert(`
    You have touched (clicked) on Greatness! Cat-Lord blesses You!
    
                ~§~§~Your Quest~§~§~
    Identify the Firefox among Us! (Click and See)`);
});

// on-click event to img element - change image
const catImage = document.querySelector("img");
catImage.onclick = () => {
    const imgSrc = catImage.getAttribute("src");
    if (imgSrc === "/images/cats/waltz-cat.jpg"){
        catImage.setAttribute("src", "/images/Firefox_logo_2017.png");
    }
    else{
        catImage.setAttribute("src", "/images/cats/waltz-cat.jpg");
    }
};


