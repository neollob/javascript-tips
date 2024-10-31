// 1. setAttribute() - Add/Update Attribute
let element = document.getElementById("myElement"); // Select an element by its ID 
element.setAttribute("class", "highlight"); // Add/Update the "class" attribute with value "highlight"

// 2. getAttribute() - Get Attribute Value
let classValue = element.getAttribute("class"); // Get the value of the "class" attribute (e.g., "highlight")

// 3. removeAttribute() - Remove an Attribute
// =====
element.removeAttribute("class"); // Remove the "class" attribute from the element

// 4. hasAttribute() - Check if an Attribute Exists
// ======
let hasID= element.hasAttribute("id"); // Check if the element has an "id" attribute (true/false)

// 5. dataset - Access Custom Data Attributes
element.setAttribute("data-user-id", "123"); // Add a custom data attribute: data-user-id="123"
let userId = element.dataset.userId; // Access custom attribute using dataset (returns "123")

// 6. innerHTML Get/Set HTML Content
element.innerHTML = "<p>Hello World</p>"; // Set HTML content inside the element 
let htmlContent = element.innerHTML; // Get the HTML content inside the element

// 7. innerText - Get/Set Text Content
element.innerText = "Hello, World!"; // Set text content inside the element 
let textContent = element.innerText; // Get the text content inside the element

// 8. textContent Get/Set Plain Text Content
element.textContent = "Plain text only"; // Set plain text content inside the element 
let plainText = element.textContent; // Get the plain text content inside the element

// 9. classList Manage Element's CSS Classes
element.classList.add("visible"); // Add a CSS class to the element 
element.classList.remove("hidden"); // Remove a CSS class from the element
element.classList.toggle("active"); // Toggle a CSS class on the element (adds if missing, removes if present)
let hasClass = element.classList.contains("visible"); // Check if the element has the "visible" class (true/false)

// 10. style - Directly Set Inline Styles
element.style.color="blue"; // Set inline style: color="blue"
element.style.fontSize = "18px"; // Set inline style: font-size="18px"
let bgColor= element.style.backgroundColor; // Get the background color style of the element (e.g., "rgb(0, 0, 255)")

// 11. id Get/Set Element's ID
element.id = "newId"; // Set a new ID for the element
let elementId = element.id; // Get the element's current ID

// 12. title Get/Set Tooltip Text
element.title = "This is a tooltip"; // Set the title attribute to show as a tooltip on hover 
let tooltipText = element.title; // Get the current title/tooltip text

// 13. tabIndex Set Keyboard Navigation Order
element.tabIndex = 1; // Set tab order for keyboard navigation
let tabIndexValue = element.tabIndex; // Get the current tab index value

// 14. contentEditable Make Element Editable
element.contentEditable = "true"; // Make the element content editable (true/false)
let isEditable = element.contentEditable; // Get the current editable state of the element ("true" or "false")