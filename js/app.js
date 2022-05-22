/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
const activeSection = 'active-section'
const allSections = document.querySelectorAll('main > section')
const allNavigation = document.getElementById('navbar__list')

// Initialize App.
appInit(allSections)
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

function appInit(sections) {
    if (sections.length > 0) {
        sections.forEach(element => {
            buildNav(element.id, element.dataset.nav)
        });
    }
}

function resetSection() {
    allSections.forEach(element => {
        element.classList.remove('active__section')
    })
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function buildNav(id, title) {
    let navItem = document.createElement('li')
    let navLink = document.createElement('a')
    navLink.innerHTML = title
    navLink.dataset.nav = id
    navLink.classList.add('menu__link')
    navLink.href = '#' + id
    navLink.onclick = scrollToSection
    navItem.append(navLink)
    allNavigation.append(navItem)
}


// Scroll to anchor ID using scrollTO event
function scrollToAnchor(sectionOffset) {
    window.scrollTo(0, sectionOffset)
}

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click
function scrollToSection(e) {
    e.preventDefault()
    resetSection()
    let section = document.getElementById(e.target.dataset.nav)
    setSectionActive(section)
    scrollToAnchor(section.offsetTop)
}

// Set sections as active
function setSectionActive(sectionElement) {
    sectionElement.classList.add('active__section')
}