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

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
function buildNav(id, title) {
    console.log(id, title)
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active