// source html - cats_site/index.html
// modify header---sample
/* 
const introHeading = document.querySelector("h1");
introHeading.textContent = "Introducing... The Super Cats!";
*/ 

// sample click event to list elements
document.querySelector("ul").addEventListener("click", () => {
    alert(`
    You have touched (clicked) on Greatness! Cat-Lord blesses You!
    
                ~§~§~|| Your Quest ||~§~§~
    Identify the Firefox among Us! (Click each photo and See)`);
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

// button functionality for personalised message
let changeButton = document.querySelector("button");
let introHeading = document.querySelector("h1");

function setUserName(){
    const userName = prompt("Enter thy name, Young Padawan!");
    if(!userName){
        setUserName();
    }
    else{
        localStorage.setItem("name", userName);
        introHeading.textContent = `Welcome to the Super Cats photo gallery, Young Padawan ${userName}`;
    }    
}

// button functionality for returning back to top
function backToTop(){
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, Edge, Opera
}


// function initialization
if(!localStorage.getItem("name")){
    setUserName();
}
else{
    const storedName = localStorage.getItem("name");
    introHeading.textContent = `Welcome to the Super Cats photo gallery, Young Padawan ${storedName}`;
}

changeButton.onclick = () => { 
    setUserName();
    backToTop();
};
