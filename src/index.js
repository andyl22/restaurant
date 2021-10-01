import ChristmasCookies from './christmas-cookies.jpg'

const content = document.getElementById("content");

createHeader();
createImage();

function createHeader() {
    const header = document.createElement("h1");
    const subHeader = document.createElement("h2");
    header.textContent = "The Cookie Factory";
    subHeader.textContent = "World Class Cookies, 12 years in a row!";
    content.appendChild(header);
    content.appendChild(subHeader);
}

function createImage() {
    const myImage = new Image();
    myImage.src = ChristmasCookies;
    content.appendChild(myImage);
}