// Form handling function
function submitForm(event) {
  event.preventDefault(); // Prevent form from submitting normally
  // Redirect to result page
  window.location.href = "result.html";

  // Collect form values
  const name = document.getElementById("name").value;
  const careerField = document.getElementById("careerField").value;
  const profession = document.getElementById("profession").value;
  const location = document.getElementById("location").value;

  // Generate a message for demonstration purposes
  const result = document.getElementById("results");
  result.innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Career Field:</strong> ${careerField}</p>
    <p><strong>Profession:</strong> ${profession}</p>
    <p><strong>Location:</strong> ${location}</p>
    <p>Generating personalized recommendations for ${name} in ${careerField}...</p>
  `;

  // Replace this section with code to send data to an AI or backend
  // Example:
  // callApiToGetRecommendations(name, careerField, profession, location);
}
