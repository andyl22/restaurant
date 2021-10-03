import "./index.css"
import cookiesWithDrinkImage from "./danish-with-drinks.jpg"
import warmCookies from "./warm-cookies.jpg"
import sanFranImage from "./san-francisco.jpg"
import bakeryImage from "./bakery.jpg"
import pumpkinSpiceCupcakes from "./pumpkin-spice-cupcakes.jpg"
import pumpkinPie from "./pumpkin-pie.jpg"

if (process.env.NODE_ENV == 'production') {
    console.log('Production mode!');
}

if (process.env.NODE_ENV == 'development') {
    console.log('Development mode!');
  }

function createHeader() {
    createHeaderText();
    createTabs();

    function createHeaderText() {
        const pageTitle = document.createElement("h1");
        const subTitle = document.createElement("h2");
        pageTitle.textContent = "Andy's Bakery";
        subTitle.textContent = "Autumn Specials Now In Store!";
        appendTo(header, pageTitle);
        appendTo(header, subTitle);
    }

    function createTabs() {
        appendTo(header, createTabContainer());
        function createTabContainer() {
            const tabsButtonContainer = document.createElement("div");
            tabsButtonContainer.setAttribute("id", "tabs-button-container");
            return createTabElements(tabsButtonContainer);

        }

        function createTabElements(tabsButtonContainer) {
            addToContainer(
                addButtonText(
                    addSelectors(
                        declareTabs()
                    )
                )
            );
            return tabsButtonContainer;

            function declareTabs() {
                let tabOne = document.createElement("button");
                let tabTwo = document.createElement("button");
                let tabThree = document.createElement("button");
                return [tabOne, tabTwo, tabThree];
            }

            function addSelectors(tabsArray) {
                let idCount = 0;
                tabsArray.forEach(tab => tab.classList.add("tabs"));
                tabsArray.forEach(tab => {
                    tab.setAttribute("id", "tab" + idCount);
                    idCount++;
                })
                return tabsArray;
            }

            function addButtonText(tabsArray) {
                tabsArray[0].textContent = "Home";
                tabsArray[1].textContent = "Menu";
                tabsArray[2].textContent = "Contact";
                return tabsArray;
            }

            function addToContainer(tabsArray) {
                tabsArray.forEach(tab => tabsButtonContainer.appendChild(tab));
            }

        }
    }
}


function addTabFunctionAndContent() {
    const createTabContent = tabId => {
        let contentHeader = (tabId == "tab0") ? homeTabContentHeader() :
        (tabId == "tab1") ? menuTabContentHeader() :
        contactTabContentHeader();

        let contentContainer = createContentContainer();

        let content = (tabId == "tab0") ? homeTabContent() :
        (tabId == "tab1") ? menuTabContent() :
        contactTabContent();

        content.forEach(element => contentContainer.appendChild(element));
        return [contentHeader, contentContainer];

        function homeTabContentHeader() {
            return h3Text("Homemade Cookies from San Francisco!");
        }

        function menuTabContentHeader() {
            return h3Text("Our Seasonal Cookies!");
        }
        
        function contactTabContentHeader() {
            return h3Text("Contact Us Now!");
        }

        function h3Text(string) {
            const h3Text = document.createElement("h3");
            h3Text.textContent = string;
            return h3Text;
        }

        function createContentContainer() {
            let subContainer = document.createElement("div");
            subContainer.setAttribute("id", "sub-container");
            return subContainer;
        }

        function homeTabContent() {
            const contentArray = [];
            contentArray.push(h2Text("Homemade Bakery from San Francisco"));
            contentArray.push(articleText("Come check out our freshly baked goods today in the Excelsior District, in San Francisco. <br>"));
            contentArray.push(contentImage(bakeryImage, "", "home-page"));
            return contentArray;
        }

        function menuTabContent() {
            const contentArray = [];
            contentArray.push(h2Text("Our Seasonal Items"));
            contentArray.push(articleText("Warm up with our Fall drinks, with these seasonal specials."));
            contentArray.push(contentImageArray({"Cookies With Pumpkin Spice Coffee": cookiesWithDrinkImage, "Melted Cookies": warmCookies}));
            contentArray.push(contentImageArray({"Pumpkin Spice Cupcakes": pumpkinSpiceCupcakes, "Pumpkin Pie": pumpkinPie}));
            return contentArray;
        }
        
        function contactTabContent() {
            const contentArray = [];
            contentArray.push(h2Text("Contact Us Now!"));
            contentArray.push(contentImage(sanFranImage));
            contentArray.push(articleText("123 Baker Street"));
            return contentArray;
        }

        function h2Text(string) {
            const headerText = document.createElement("h2");
            headerText.textContent = string;
            return headerText;
        }

        function articleText(string) {
            const paragraphText = document.createElement("p");
            paragraphText.innerHTML = string;
            return paragraphText;
        }

        function contentImage(imageURL, figCaption="", idValue="") {
            const figure = document.createElement("figure");
            const myImage = new Image();
            myImage.src = imageURL;
            figure.append(myImage);

            if (figCaption) {
                const caption = document.createElement("figcaption");
                caption.textContent = figCaption;
                figure.append(caption);
            }

            if (idValue) {figure.setAttribute("id", idValue)}
            
            figure.classList.add("images");

            return figure;
        }

        function contentImageArray(figures) {
            const imageContainer = document.createElement("div");
            for (let key in figures) {
                let val = figures[key];
                imageContainer.classList.add("figures-container");
                imageContainer.appendChild(contentImage(val, key));
            }
            return imageContainer;
        }
    }

    initialTab();
    addListeners();
    
    function initialTab() {
        let contentContainer = createTabContainer();
        let tab = createTabContent("tab0");
        tab.forEach(element => contentContainer.appendChild(element));
        appendTo(main, contentContainer);
        document.getElementById("tab0").classList.add("selected");
    }

    function addListeners() {
        let idCount = 0;
        while (idCount<3) {
            document.getElementById("tab"+idCount).addEventListener("click", changeToSelectedTab)
            idCount++;
        }
    }

    function changeToSelectedTab(e) {
        removeExistingContent();
        let tabContainer = createTabContainer();
        let tabId = e.target.getAttribute("id");
        let tabContent = createTabContent(tabId)
        tabContainer.appendChild(tabContent[0]);
        tabContainer.appendChild(tabContent[1]);
        appendTo(main,tabContainer);
        e.target.classList.add("selected");
    }

    function createTabContainer() {
        let tabContainer = document.createElement("div");
        tabContainer.setAttribute("id", "tab-container");
        return tabContainer;
    }

    function removeExistingContent() {
        if (document.getElementById("tab-container")) {
            main.removeChild(document.getElementById("tab-container"));
        }
        let tabButtons = document.getElementById("tabs-button-container").childNodes;
        tabButtons.forEach(button => (button.classList[0]) ? button.classList.remove("selected") : false);
    }
}

// Used to append to global scope
function appendTo(appendee, appending) {
    appendee.appendChild(appending);
}

const main = document.getElementsByTagName("main")[0];
const header = document.getElementsByTagName("header")[0];
createHeader();
addTabFunctionAndContent();
