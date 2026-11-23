// ==========================================
// TASK 1
// Generate heading dynamically
// ==========================================

const heading = document.createElement("h2");

heading.textContent = "Welcome to My Node.js Lab";

document.getElementById("headingOutput").appendChild(heading);


// ==========================================
// Generate paragraph dynamically
// ==========================================

const paragraph = document.createElement("p");

paragraph.textContent =
    "This paragraph has been created dynamically using JavaScript. Node.js allows us to build powerful web applications using JavaScript.";

document.getElementById("paragraphOutput").appendChild(paragraph);


// ==========================================
// Generate list of 5 items dynamically
// ==========================================

const items = [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express.js"
];

const list = document.createElement("ul");

items.forEach(function(item) {

    const listItem = document.createElement("li");

    listItem.textContent = item;

    list.appendChild(listItem);

});

document.getElementById("listOutput").appendChild(list);


// ==========================================
// TASK 2
// Student Profile
// ==========================================

function createProfile() {

    // Get input values
    const name = document.getElementById("name").value.trim();
    const rollNumber =
        document.getElementById("rollNumber").value.trim();

    const section =
        document.getElementById("section").value.trim();

    const dob =
        document.getElementById("dob").value;


    // Check empty fields
    if (name === "" ||
        rollNumber === "" ||
        section === "" ||
        dob === "") {

        alert("Please fill all fields.");

        return;
    }


    // Calculate age
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDifference =
        today.getMonth() - birthDate.getMonth();


    // If birthday has not occurred this year
    if (
        monthDifference < 0 ||
        (monthDifference === 0 &&
        today.getDate() < birthDate.getDate())
    ) {

        age--;

    }


    // Display information in profile card

    document.getElementById("profileName").textContent = name;

    document.getElementById("profileRoll").textContent =
        rollNumber;

    document.getElementById("profileSection").textContent =
        section;

    document.getElementById("profileDOB").textContent =
        dob;

    document.getElementById("profileAge").textContent =
        age + " years";
}