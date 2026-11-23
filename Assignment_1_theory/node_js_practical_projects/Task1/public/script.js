const content = document.getElementById("content");

// Section 1: Generate a heading
const headingSection = document.createElement("section");
headingSection.className = "section heading-section";

const heading = document.createElement("h2");
heading.textContent = "Welcome to JavaScript";

headingSection.appendChild(heading);
content.appendChild(headingSection);

// Section 2: Generate a paragraph
const paragraphSection = document.createElement("section");
paragraphSection.className = "section paragraph-section";

const paragraph = document.createElement("p");
paragraph.textContent =
    "JavaScript dynamically creates and displays content on a web page.";

paragraphSection.appendChild(paragraph);
content.appendChild(paragraphSection);

// Section 3: Generate a list of five items
const listSection = document.createElement("section");
listSection.className = "section list-section";

const listHeading = document.createElement("h2");
listHeading.textContent = "My Learning Topics";

const list = document.createElement("ul");

const items = [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express.js"
];

items.forEach(function(item) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
});

listSection.appendChild(listHeading);
listSection.appendChild(list);
content.appendChild(listSection);
