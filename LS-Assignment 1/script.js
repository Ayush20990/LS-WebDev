 const quizQuestions = [
      {
        question: "What type of game is Valorant?",
        answers: ["First-person shooter", "Puzzle game", "Racing game", "Sports game"],
        correct: 0
      },
      {
        question: "How many players are there in each team in Valorant?",
        answers: ["3", "5", "7", "9"],
        correct: 1
      },
      {
        question: "What are the characters in Valorant called?",
        answers: ["Heroes", "Champions", "Agents", "Soldiers"],
        correct: 2
      },
      {
        question: "What is the highest rank in Valorant?",
        answers: ["Radiant", "Ascendant", "Platinum", "Diamond"],
        correct: 0
      }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
      const questionElement = document.getElementById("question");
      const answersElement = document.getElementById("answers");

      questionElement.textContent = quizQuestions[currentQuestionIndex].question;
      answersElement.innerHTML = "";
      quizQuestions[currentQuestionIndex].answers.forEach((answer,index)=>{
        const button=document.createElement("button");
        button.textContent=answer;
        button.onclick=()=>checkAnswer(index);
        answersElement.appendChild(button);
      });
      document.getElementById("result").textContent = "";
      document.getElementById("next-button").style.display = "none";
    }

    function checkAnswer(index) {
      const correctIndex = quizQuestions[currentQuestionIndex].correct;
      const resultElement = document.getElementById("result");

      if (index === correctIndex) {
        resultElement.textContent = "Correct!";
        score++;
      } else {
        resultElement.textContent = `Wrong! The correct answer is: ${quizQuestions[currentQuestionIndex].answers[correctIndex]}`;
      }

      document.getElementById("next-button").style.display = "block";
    }

    function nextQuestion() {
      currentQuestionIndex++;

      if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
      } else {
        showScore();
      }
    }

    function showScore() {
      const quizContainer = document.getElementById("quiz-container");
      quizContainer.innerHTML = `<h3 style="color:red">Your score: ${score} / ${quizQuestions.length}</h3>`;
    }

    // Load the first question when the page loads
    window.onload = loadQuestion;