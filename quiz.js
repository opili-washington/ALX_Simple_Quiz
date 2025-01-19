// // Identify the Correct Answer:
// function checkAnswer() {
// let correctAnswer= '4';
// }

// // Retrieve the User’s Answer:
// document.querySelector ('input[name="quiz"]:checked')

// let userAnswer= "value";


// // Compare the User’s Answer with the Correct Answer:
// if (userAnswer===correctAnswer){
//     feedback.textContent = "Correct! Well done.";   
// }

// else {
//     feedback.textContent = "That's incorrect. Try again!"; 
// }
   
// // Add an Event Listener to the Submit Button:
// const submitButton=document.getElementById ("submit-answer")
// submitButton.addEventListener("click", checkAnswer)

// Define the checkAnswer function
function checkAnswer() {
    const correctAnswer = "4"; // Identify the Correct Answer
    const feedback = document.getElementById("feedback"); // Get the feedback element
  
    // Retrieve the User’s Answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked'); // Get the checked radio button
  
    if (selectedOption) {
      const userAnswer = selectedOption.value; // Get the value of the selected answer
  
      // Compare the User’s Answer with the Correct Answer
      if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green"; // Optional: Add color for correct answer
      } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red"; // Optional: Add color for incorrect answer
      }
    } else {
      // If no option is selected, alert the user
      alert("Please select an answer before submitting.");
    }
  }
  
  // Add an Event Listener to the Submit Button
  const submitButton = document.getElementById("submit-answer");
  submitButton.addEventListener("click", checkAnswer);