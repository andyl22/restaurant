import "./index.css";

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
        pageTitle.textContent = "The Cookie Factory";
        subTitle.textContent = "World Class Cookies, 12 years in a row!";
        appendTo(header, pageTitle);
        appendTo(header, subTitle);
    }

    function createTabs() {
        appendTo(header, createTabContainer() );

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
                tabsArray[1].textContent = "Seasonal";
                tabsArray[2].textContent = "Contact";
                return tabsArray;
            }

            function addToContainer(tabsArray) {
                tabsArray.forEach(tab => tabsButtonContainer.appendChild(tab));
            }

        }
    }
}


function addFunctionalityToTabs() {
    const tabFactory = tabId => {
        return (tabId == "tab0") ? tab0() :
        (tabId == "tab1") ? tab1() :
        tab2();

        function tab0() {
            const aboutHeader = document.createElement("h3");
            aboutHeader.textContent = "Homemade Cookies from San Francisco since 2014";
            return aboutHeader;
        }

        function tab1() {
            const menuHeader = document.createElement("h3");
            menuHeader.textContent = "Our Seasonal Cookies";
            return menuHeader;
        }
        
        function tab2() {
            const contactHeader = document.createElement("h3");
            contactHeader.textContent = "Contact Us Now!";
            return contactHeader;
        }
    }

    initialTab();
    addListeners();
    
    function initialTab() {
        let contentContainer = createTabContainer();
        contentContainer.appendChild(tabFactory("tab0"));
        appendTo(main, contentContainer);
        document.getElementById("tab0").classList.add("selected");
    }

    function addListeners() {
        let idCount = 0;
        while (idCount<3) {
            document.getElementById("tab"+idCount).addEventListener("click", selectTab)
            idCount++;
        }
    }

    function selectTab(e) {
        removeExistingContent();
        let tabContainer = createTabContainer();
        let tabId = e.target.getAttribute("id");
        tabContainer.appendChild(tabFactory(tabId));
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

const body = document.body;
const main = document.getElementsByTagName("main")[0];
const header = document.getElementsByTagName("header")[0];
createHeader();
addFunctionalityToTabs();
