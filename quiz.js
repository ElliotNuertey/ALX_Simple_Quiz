// Define the function to check the user's answer
function checkAnswer() {
    // Step 1: Set the correct answer
    const correctAnswer = "4";

    // Step 2: Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Step 3: If no option is selected, show a prompt
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer before submitting.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 4: Compare the answer and give feedback
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745"; // Green for correct
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545"; // Red for incorrect
    }
}

// Step 5: Attach the event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
