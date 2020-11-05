const STORE = {
  questions: [
    {
      question: 'What city was the first capital of the United States?',
      answers: [
        'Washington, D.C.',
        'Philadelphia',
        'New York City',
        'Boston'
      ],
      correctAnswer: 2,
      correctWrittenOut: 'New York City'
    },
    {
      question: 'Who first discovered America?',
      answers: [
        'Leif Erikson',
        'Ferdinand Magellan',
        'Christopher Columbos',
        'Hernando Cortes'
      ],
      correctAnswer: 0,
      correctWrittenOut: 'Leif Erikson'
    },
    {
      question: 'When was the Declaration of Independence signed?',
      answers: [
        'June 30, 1776',
        'July 4, 1776',
        'August 2, 1776',
        'September 20, 1776'
      ],
      correctAnswer: 2,
      correctWrittenOut: 'August 2, 1776'
    },
    {
      question: 'What happened to those convicted at the Salem witch trials?',
      answers: [
        'spent their lifetime in prison',
        'burned at the stake',
        'hanged at the gallows',
        'were set free'
      ],
      correctAnswer: 2,
      correctWrittenOut: 'hanged at the gallows'
    },
    {
      question: 'Who was the first president to live in the White House?',
      answers: [
        'George Washington',
        'John Adams',
        'Thomas Jefferson',
        'James Madison'
      ],
      correctAnswer: 1,
      correctWrittenOut: 'John Adams'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  correct: false,
  feedback: false
};

/********** TEMPLATE GENERATION FUNCTIONS **********/
function startPageTemplate() {
  $("main").html(`
      <section class="start-page">
        <h2>Welcome!</h2>
        <button id="start">Start Quiz</button>
      </section>
  `);
}

function questionTemplate() {
  const targetQuestion = STORE.questions[STORE.questionNumber]
  $("main").html(`
    <section class="quiz-page">
      <h3>${targetQuestion.question}</h3>
      <form>
        <ul>
          <li><input type="radio" name="answer-options" id="0" value="0" required><label for="0">${targetQuestion.answers[0]}</label></li>
          <li><input type="radio" name="answer-options" id="1" value="1" required><label for="1">${targetQuestion.answers[1]}</label></li>
          <li><input type="radio" name="answer-options" id="2" value="2" required><label for="2">${targetQuestion.answers[2]}</label></li>
          <li><input type="radio" name="answer-options" id="3" value="3" required><label for="3">${targetQuestion.answers[3]}</label></li>
        <ul>
        <input type="submit" value="Submit">
      </form>
    </section>
    <section class="current-progress">
      <h3>Current Progress</h3>
      <p>Current Score: ${STORE.score}/${STORE.questionNumber}</p>
      <p>Questions Answered: ${STORE.questionNumber}/${STORE.questions.length}</p>
    </section>
  `);
}

function feedbackTemplate () {
  const targetQuestion = STORE.questions[STORE.questionNumber];
  $("main").html(`
      <section class="feedback">
        <h2>${STORE.correct ? "Correct!" : "Incorrect"}</h2>
        <p>The correct answer was: ${targetQuestion.correctWrittenOut}</p>
        <button id="next-question">Next Question</button>
      </section>
  `);
}

function summaryTemplate() {
  $("main").html(`
      <section class="summary">
        <h2>Quiz Summary</h2>
        <p>You got ${STORE.score} out of ${STORE.questions.length} questions correct!</p>
        <button id="restart-quiz">Restart Quiz</button>
      </section>
  `);
}

/********** RENDER FUNCTION(S) **********/
// Render function to handle other render functions
function render() {
  if (!STORE.quizStarted) {
    startPageTemplate();
  } else if (STORE.feedback == true) {
      feedbackTemplate();
  } else if (STORE.questionNumber >= STORE.questions.length) {
      summaryTemplate();
  } else {
      questionTemplate();
  }
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)  
function startedQuiz() {
  STORE.quizStarted = true;
  render();
}

function onStart() {
  $("main").on("click", "#start", startedQuiz);
}

function answerSubmitted() {
  //event.preventDefault();
  const userAnswer = parseInt($('input[type="radio"]:checked').val());
  const targetQuestion = STORE.questions[STORE.questionNumber];
  if (userAnswer === targetQuestion.correctAnswer) {
    STORE.score++;
    STORE.correct = true;
  }
  STORE.feedback = true
  render();
}

function onSubmit() {
  $("main").on("submit", answerSubmitted);
}

function nextQuestion() {
  STORE.questionNumber++;
  STORE.correct = false;
  STORE.feedback = false;
  render();
}

function onNextQuestion() {
  $("main").on("click", "#next-question", nextQuestion);
}

function restart() {
  STORE.score = 0;
  STORE.questionNumber = 0;
  STORE.startedQuiz = false;
  render();
}

function onRestart () {
  $("main").on("click", "#restart-quiz", restart);
} 

//main function to call all other functions
function main() {
  onStart();
  onSubmit();
  onNextQuestion();
  onRestart();
  render();
}

$(main);