// Global Variables
let menu = [];
let sections = ['section1', 'section2', 'section3', 'section4'];
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

    scrollToSection(id)
}
// End of Scroll to section on link click.

// Scroll to anchor ID using scrollTO event
function scrollToSection(id) {
    let element = document.getElementById(id)
    element.scrollIntoView();
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

// initialize application.
function init() {
    // iterate section id to prepare menu items
    sections.forEach(id => {
        menu.push(getSection(id))
    })

    buildNav()
}
// invoke initialize application.
init()