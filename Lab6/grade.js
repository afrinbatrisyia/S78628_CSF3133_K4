// Item 10: Comments explain each extended feature in Part 2
function checkMark() {
  let name = document.forms["gradeForm"]["name"].value.trim();
  let markInput = document.forms["gradeForm"]["mark"].value.trim();

  if (name === "") {
    alert("Name must be filled out.");
    return false;
  }

  // Item 5: Check for an empty mark field
  if (markInput === "") {
    alert("Mark field cannot be empty.");
    return false;
  }

  if (isNaN(markInput)) {
    alert("Please enter a valid numeric value.");
    return false;
  }

  let mark = parseInt(markInput, 10);

  if (mark < 0 || mark > 100) {
    alert("Mark must be between 0 and 100.");
    return false;
  }

  let grade;
  let color;

  // Item 6: Set grade and style.color (green for A/B, orange for C, red for F)
  if (mark >= 80) {
    grade = "A";
    color = "green";
  } else if (mark >= 65) {
    grade = "B";
    color = "green";
  } else if (mark >= 50) {
    grade = "C";
    color = "orange";
  } else {
    grade = "F";
    color = "red";
  }

  let result = document.getElementById("result");
  result.innerHTML = name + " got grade " + grade;
  result.style.color = color;

  // Item 8: Display date and time when checked without GMT
  document.getElementById("checkedTime").innerHTML =
    "Checked on: " + new Date().toLocaleString();

  return false;
}

// Item 7: Generate a random whole number from 0 to 100 into the mark box
function randomMark() {
  document.getElementById("mark").value = Math.floor(Math.random() * 101);
}

// Display the grade scale table
function showTable() {
  let grades = ["A", "B", "C", "F"];
  let ranges = ["80-100", "65-79", "50-64", "0-49"];
  let tableHTML = "<table><tr><th>Grade</th><th>Mark range</th></tr>";

  for (let i = 0; i < grades.length; i++) {
    tableHTML += "<tr><td>" + grades[i] + "</td><td>" + ranges[i] + "</td></tr>";
  }

  tableHTML += "</table>";
  document.getElementById("tableContainer").innerHTML = tableHTML;
}