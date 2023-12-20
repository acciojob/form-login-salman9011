// script.js
 const form = document.getElementById("form1");

function getFormvalue() {
    // Get the form element by its ID
let fullName = form.["fname"].value +" " + form.["lname"].value;
	alert(fullName);

    // Prevent the form from actually submitting
}
