import "./index.css";

import ChristmasCookies from './christmas-cookies.jpg'
import Background from './Background.jpg'

const content = document.getElementById("content");

createHeader();
// createImage();

function createHeader() {
    const headerContainer = document.createElement("header");
    const header = document.createElement("h1");
    const subHeader = document.createElement("h2");
    header.textContent = "The Cookie Factory";
    subHeader.textContent = "World Class Cookies, 12 years in a row!";
    headerContainer.appendChild(header);
    headerContainer.appendChild(subHeader);
    content.appendChild(headerContainer);
}

function createImage() {
    const myImage = new Image();
    myImage.src = ChristmasCookies;
    content.appendChild(myImage);
}