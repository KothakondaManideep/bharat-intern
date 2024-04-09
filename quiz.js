const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    // Add more questions as needed
  ];
  
  let currentQuestionIndex = 0;
  
  function displayQuestion() {
    document.getElementById('question').textContent = questions[currentQuestionIndex].question;
  }
  
  function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
    const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();
  
    if (userAnswer === correctAnswer) {
      document.getElementById('feedback').textContent = "Correct!";
    } else {
      document.getElementById('feedback').textContent = "Incorrect. Try again!";
    }
  
    // Move to the next question or end the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      document.getElementById('question-container').innerHTML = "<h2>Quiz completed!</h2>";
    }
  }
  
  // Start the quiz
  displayQuestion();
  