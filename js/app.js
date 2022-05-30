// Global Variables
let menu = [];
let sections = [];
let currentSection = null;
//End Global Variables


// Start Helper Functions to build navagation
function buildNav() {

    menu.forEach(el => {
        attachMenuItem(el.element, el.title)
    })
}
//End Helper Functions

// Main function to build list item for navagation 
function attachMenuItem(element, title) {

    let navs = document.querySelector('#navbar__list')

    let navItem = document.createElement('li')
    let navAnchor = document.createElement('a')

    // set attributes and eventlistener for nav item.
    navAnchor.setAttribute('class', 'menu__link')
    navAnchor.setAttribute('data-nav', title)
    navAnchor.setAttribute('data-id', element.id)
    navAnchor.addEventListener('click', navClick)
    navAnchor.innerHTML = `${title}`;

    navItem.appendChild(navAnchor)
    navs.appendChild(navItem)
}
//End Main function to build list item for navagation

// Scroll to section on link click
function navClick(e) {
    e.preventDefault()
    let {
        id
    } = e.target.dataset

    // bail out if section already selected
    if (currentSection === id) {
        return
    }

    currentSection = id
    setActiveNav(id)
    scrollToSection(id)
}
// End of Scroll to section on link click.

// Scroll to anchor ID using scrollTO event
function scrollToSection(id) {
    let element = document.getElementById(id)
    element.scrollIntoView({
        behavior: "smooth"
    });
    shadeSection(id)
}

//Shade scrolled to section.
function shadeSection(id) {

    // iterate our sections and remove or add active class
    sections.forEach(elId => {
        let el = document.getElementById(elId)

        el.classList.remove('section-active')

        // add class for selection section
        if (id === elId) {
            el.classList.add('section-active')
        }
    })
}

// Gets section and turns to an object.
function getSection(id) {
    let section = document.getElementById(id)
    return {
        element: section,
        title: section.dataset.nav
    }
}

// Get all Section in main element. 
function getAllSections() {
    let sectionElements = document.querySelectorAll('main > section')
    sectionElements.forEach(sec => {
        sections.push(sec.id)
    })
}

// Set active nav. 
function setActiveNav(id) {
    let navElements = document.querySelectorAll('ul#navbar__list > li')
    navElements.forEach(navEl => {
        navEl.childNodes.forEach(nv => {

            nv.classList.remove('menu__link-active')

            if (nv.dataset.id === id) {
                nv.classList.add('menu__link-active')
            }
        })
    })
}


// initialize application.
function init() {
    // setup sections
    getAllSections()

    // iterate section id to prepare menu items
    sections.forEach(id => {
        menu.push(getSection(id))
    })

    buildNav()
}
// invoke initialize application.
init()