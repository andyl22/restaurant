import "./index.css";
import ChristmasCookies from './christmas-cookies.jpg'

const content = document.getElementById("content");
createHeader(content);

function createHeader() {
    const headerContent = document.createElement("header");
    createHeaderText();
    createTabs();

    function createHeaderText() {
        const header = document.createElement("h1");
        const subHeader = document.createElement("h2");
        header.textContent = "The Cookie Factory";
        subHeader.textContent = "World Class Cookies, 12 years in a row!";
        headerContent.appendChild(header);
        headerContent.appendChild(subHeader);
    }

    function createTabs() {
        headerContent.appendChild(createTabContainer());

        function createTabContainer() {
            const tabsContainer = document.createElement("div");
            tabsContainer.setAttribute("id", "tabsContainer");
            return createTabElements(tabsContainer);

        }

        function createTabElements(tabsContainer) {
            addToContainer(
                addButtonText(
                    addSelectors(
                        declareTabs()
                    )
                )
            );
            return tabsContainer;

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
                tabsArray.forEach(tab => tabsContainer.appendChild(tab));
            }
        }
    }

    content.appendChild(headerContent);
}

// function createImage() {
//     const myImage = new Image();
//     myImage.src = ChristmasCookies;
//     content.appendChild(myImage);
// }
