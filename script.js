// script.js

function getFormvalue() {
    // Get the form element by its ID
    var form = document.getElementById("form1");

    // Access the input elements by their names
    var firstName = form.elements["fname"].value;
    var lastName = form.elements["lname"].value;

    // Display the values using alert
    alert("First Name: " + firstName + "Last Name: " + lastName);

    // Prevent the form from actually submitting
}
