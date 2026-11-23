const form = document.getElementById("studentForm");
const profile = document.getElementById("profile");
const dobInput = document.getElementById("dob");

// Prevent selecting a future date of birth.
const todayForMax = new Date();
dobInput.max = [
    todayForMax.getFullYear(),
    String(todayForMax.getMonth() + 1).padStart(2, "0"),
    String(todayForMax.getDate()).padStart(2, "0")
].join("-");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const section = document.getElementById("section").value.trim();
    const dobValue = dobInput.value;

    if (!name || !roll || !section || !dobValue) {
        alert("Please fill in all fields.");
        return;
    }

    const dob = new Date(dobValue + "T00:00:00");
    const today = new Date();

    if (Number.isNaN(dob.getTime()) || dob > today) {
        alert("Please enter a valid date of birth.");
        return;
    }

    // Calculate age in completed years.
    let age = today.getFullYear() - dob.getFullYear();

    const birthdayNotReached =
        today.getMonth() < dob.getMonth() ||
        (today.getMonth() === dob.getMonth() &&
         today.getDate() < dob.getDate());

    if (birthdayNotReached) {
        age--;
    }

    document.getElementById("showName").textContent = name;
    document.getElementById("showRoll").textContent = roll;
    document.getElementById("showSection").textContent = section;
    document.getElementById("showDob").textContent =
        dob.toLocaleDateString("en-GB");
    document.getElementById("showAge").textContent = age;

    profile.hidden = false;
});
