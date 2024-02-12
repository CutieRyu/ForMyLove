// Get references to the buttons
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Add event listener to the "YES" button
yesBtn.addEventListener("click", function() {
    // Disable the "YES" button
    yesBtn.disabled = true;

    // Show the message as an alert
    alert("It's a Date my loveeeee 🥰🥰🥰🥰🥰");

    // Redirect to a new page after a delay (in milliseconds)
    setTimeout(function() {
        window.location.href = "details.html"; // Change "newpage.html" to the desired URL
    }, 2000); // Change 2000 to the desired delay in milliseconds (e.g., 2000 for 2 seconds)

    // Decrease size of "NO" button
    noBtn.style.width = (noBtn.offsetWidth - 10) + "px";
    noBtn.style.height = (noBtn.offsetHeight - 5) + "px";
});

// Add event listener to the "NO" button
noBtn.addEventListener("click", function() {
    // Decrease size of "NO" button
    noBtn.style.width = (noBtn.offsetWidth - 10) + "px";
    noBtn.style.height = (noBtn.offsetHeight - 5) + "px";
});