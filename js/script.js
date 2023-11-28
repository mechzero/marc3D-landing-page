// The navbarList is the unordered list element, the "ul" with the ID 'navbar__list"
const navbarList = document.getElementById("navbar__list");

// Get all of the sections from the index.html
const sections = document.querySelectorAll("section");

// An array containing the names of the sections we will navigate to
// Change these when needing to update the nav bar text names
const navItems = ["Materials", "CAD", "3D Scanning", "3D Printing"];

// This function builds the navigation menu
function buildNavigationMenu() {
  navbarList.innerHTML = ""; // Clear existing items

  // "item" is the temporary placeholder for the arrayItems of navItems
  // "index" is the index (starting at 0) of the items within the array navItems
  navItems.forEach((item, index) => {
    // Ceate the element with the li tag for the list items
    const listItem = document.createElement("li");

    // We need the anchor tags to make the list items links
    const anchor = document.createElement("a");

    // Placeholder for the li link
    anchor.href = "#";

    // Sets the text content of the anchor to match the items within the navItem array "Materials", "CAD", "3D Scanning", etc.
    anchor.textContent = item;

    // Adds the anchor tag to the list item
    listItem.appendChild(anchor);

    // adds each list item to the navigation bar's unorder list
    navbarList.appendChild(listItem);

    // Attach click event listener to each anchor
    anchor.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default behavior of anchor tag

      // Generate section ID based on index
      const sectionId = `section${index + 1}`;

      // Scroll to the section
      const section = document.getElementById(sectionId);

      // If the section is there, scroll to it, smoothly
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// Call function to build the navigation
buildNavigationMenu();

function setActiveSection() {
  // Iterates through each section, storing them into "section"
  // "index" is the index (starting at 0) of the items within the array "section"
  sections.forEach((section, index) => {
    // Get position information of the element section
    const bounding = section.getBoundingClientRect();

    // Get a specific navItem based on its index
    const navItem = document.querySelectorAll("#navbar__list li")[index];

    // Check the positioning of the section, if it's within the view of the user
    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
      // add these classes to the section and the navItem respectively
      section.classList.add("your-active-class");
      navItem.classList.add("active-nav-item");

      // Iterate through all sections and remove the class from sections not in view
      for (let i = 0; i < sections.length; i++) {
        if (i !== index) {
          sections[i].classList.remove("your-active-class");
          const otherNavItem = document.querySelectorAll("#navbar__list li")[i];

          // remove the class from the navItems so they are no longer highlighted
          otherNavItem.classList.remove("active-nav-item");
        }
      }
    } else {
      section.classList.remove("your-active-class");
      navItem.classList.remove("active-nav-item");
    }
    // For small screens
    if (bounding.top < 0) {
      // add these classes to the section and the navItem respectively
      section.classList.add("your-active-class");
      navItem.classList.add("active-nav-item");

      // Iterate through all sections and remove the class from sections not in view
      for (let i = 0; i < sections.length; i++) {
        if (i !== index) {
          sections[i].classList.remove("your-active-class");
          const otherNavItem = document.querySelectorAll("#navbar__list li")[i];

          // remove the class from the navItems so they are no longer highlighted
          otherNavItem.classList.remove("active-nav-item");
        }
      }
    } else {
      section.classList.remove("your-active-class");
      navItem.classList.remove("active-nav-item");
    }
  });
}

// List for scroll event and update active section based on scroll
window.addEventListener("scroll", setActiveSection);
