window.onload = function () {
    // --- Get all data from localStorage ---
    const fname = localStorage.getItem("fname");
    const mname = localStorage.getItem("mname");
    const lname = localStorage.getItem("lname");
    const birthdate = localStorage.getItem("birthdate");
    const birthloc = localStorage.getItem("birthloc");
    const gender = localStorage.getItem("gender");
    const civilstat = localStorage.getItem("civilstat");
    const nationality = localStorage.getItem("nationality");
    const religion = localStorage.getItem("religion");

    const username = localStorage.getItem("username");
    const contact = localStorage.getItem("contact");
    const email = localStorage.getItem("email");

    const profilePic = localStorage.getItem("profilePic"); // This will be a Base64 string

    // --- Helper function to safely set text content ---
    const setText = (id, value) => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = value || "N/A"; // Show 'N/A' if data is missing
        }
    };

    // --- Populate the HTML with the retrieved values ---
    setText("fname", fname);
    setText("mname", mname);
    setText("lname", lname);
    setText("birthdate", birthdate);
    setText("birthloc", birthloc);
    setText("gender", gender);
    setText("civilstat", civilstat);
    setText("nationality", nationality);
    setText("religion", religion);

    setText("username", username);
    setText("contact", contact);
    setText("email", email);

    // --- Combine names for the main header ---
    const fullName = [fname, mname, lname].filter(Boolean).join(" ");
    setText("fullname", fullName || "User Profile");

    // --- Display the profile picture if it exists ---
    const profilePicElement = document.getElementById("profile-pic");
    if (profilePic) {
        profilePicElement.src = profilePic;
    } else {
        // Fallback to a placeholder if no image was uploaded
        profilePicElement.src = "https://placehold.co/120x120/EFEFEF/333333?text=Photo";
    }
};