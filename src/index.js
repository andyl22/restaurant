import "./index.css";

function createHeader() {
    const headerContent = document.createElement("header");
    createHeaderText();
    createTabs();
    appendTo(content, headerContent);

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


function setUpTabFunctionality() {
    const tabFactory = tabId => {
        return (tabId == "tab0") ? tab0() :
        (tabId == "tab1") ? tab1() :
        tab2();

        function tab0() {
            const aboutHeader = document.createElement("h2");
            aboutHeader.textContent = "Homemade Cookies from San Francisco since 2014";
            return aboutHeader;
        }

        function tab1() {
            const menuHeader = document.createElement("h2");
            menuHeader.textContent = "Our Seasonal Cookies";
            return menuHeader;
        }
        
        function tab2() {
            const contactHeader = document.createElement("h2");
            contactHeader.textContent = "Contact Us Now!";
            return contactHeader;
        }
    }

    addListeners();
    initiateTab("tab0");

    function addListeners() {
        let idCount = 0;
        while (idCount<3) {
            document.getElementById("tab"+idCount).addEventListener("click", selectTab)
            idCount++;
        }
    }

    function initiateTab() {
        let tabContainer = createTabContainer();
        tabContainer.appendChild(tabFactory("tab0"));
        appendTo(content, tabContainer);
        document.getElementById("tab0").classList.add("selected");
    }

    function selectTab(e) {
        removeExistingContent();
        let tabId = e.target.getAttribute("id");
        let tabContainer = createTabContainer();
        tabContainer.appendChild(tabFactory(tabId));
        appendTo(content, tabContainer);
        e.target.classList.add("selected");
    }

    function createTabContainer() {
        let tabContainer = document.createElement("div");
        tabContainer.setAttribute("id", "tab-container");
        return tabContainer;
    }

    function removeExistingContent() {
        if (document.getElementById("tab-container")) {
            content.removeChild(document.getElementById("tab-container"));
        }
        let tabButtons = document.getElementById("tabs-button-container").childNodes;
        tabButtons.forEach(button => (button.classList[0]) ? button.classList.remove("selected") : false);
    }

}

// Used to append to global scope
function appendTo(appendee, appending) {
    appendee.appendChild(appending);
}

const content = document.getElementById("content");

createHeader(content);
setUpTabFunctionality();
