/**
 * Example store structure
 */
const STORE = {
    // 5 or more questions are required
    questions: [
      {
        question: 'What city was the first capital of the United States?',
        answers: [
          'Washington, D.C.',
          'Philadelphia',
          'New York City',
          'Boston'
        ],
        correctAnswer: 'New York City'
      },
      {
        question: 'Who first discovered America?',
        answers: [
          'Leif Erikson',
          'Ferdinand Magellan',
          'Christopher Columbos',
          'Hernando Cortes'
        ],
        correctAnswer: 'Leif Erikson'
      },
      {
        question: 'When was the Declaration of Independence signed?',
        answers: [
          'June 30, 1776',
          'July 4, 1776',
          'August 2, 1776',
          'September 20, 1776'
        ],
        correctAnswer: 'August 2, 1776'
      },
      {
        question: 'What happened to those convicted at the Salem witch trials?',
        answers: [
          'spent their lifetime in prison',
          'burned at the stake',
          'hanged at the gallows',
          'were set free'
        ],
        correctAnswer: 'hanged at the gallows'
      },
      {
        question: 'Who was the first president to live in the White House?',
        answers: [
          'George Washington',
          'John Adams',
          'Thomas Jefferson', ,
          'James Madison'
        ],
        correctAnswer: '2019'
      }
    ],
    quizStarted: false,
    questionNumber: 0,
    score: 0,
    correct: false
  };
  
  /********** TEMPLATE GENERATION FUNCTIONS **********/
  function startPageTemplate() {
    $("main").html(`
        <section class="start">
          <h2>Welcome!</h2>
          <button id="start">Start Quiz</button>
        </section>
    `);
  }
  
  function questionTemplate() {
    const question = STORE.questions(STORE.questionNumber)
    $("main").html(`
        //need to render the current question
        <h3>${question}</h3>
        <form>
          <fieldset id="answer-choices">
            <ul>
                <li><input type="radio" name="answer-options" id="one" value="one"><label for="one">${STORE.questions(STORE.questionNumber(answers[0]))}</label></li>
                <li><input type="radio" name="answer-options" id="two" value="one"><label for="two">${STORE.questions(STORE.questionNumber(answers[1]))}</label></li>
                <li><input type="radio" name="answer-options" id="three" value="one"><label for="three">${STORE.questions(STORE.questionNumber(answers[2]))}</label></li>
                <li><input type="radio" name="answer-options" id="four" value="one"><label for="four">${STORE.questions(STORE.questionNumber(answers[3]))}</label></li>
            <ul>
          </fieldset>
          <input type="submit" value="Submit">
        </form>
        <h3>Current Progress</h3>
          <p>Current Score: ${STORE.score}/${STORE.questionNumber}</p>
          <p>Current Question: ${STORE.questionNumber}/${STORE.questions.length}</p>
    `);
  }

  function feedbackTemplate () {
    $("main").html(`
        <section class="feedback">
          <h2>>${STORE.correct ? "Correct!" : "Incorrect"}</h2>
          <p>The correct answer was: ${STORE.questions(STORE.questionNumber(correctAnswer))}</p>
          <button id="next-question>Next Question</button>
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
    } else if (STORE.feedback) {
      feedbackTemplate();
    } else if (STORE.questionNumber >= STORE.questions.length) {
      summaryTemplate();
    } else {
      questionTemplate();
    }
  }
  
  /********** EVENT HANDLER FUNCTIONS **********/
  
  // These functions handle events (submit, click, etc)  
  function onStart() {
    $(main).on("click", "#start")
  }

  function onSubmit() {

  }

  function onNextQuestion() {

  }

  function onRestart


  function main() {
    render();
  }

  $(main);