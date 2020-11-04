/**
 * Example store structure
 */
const store = {
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
    score: 0
  };
  
  /**
   * 
   * Technical requirements:
   * 
   * Your app should include a render() function, that regenerates the view each time the store is updated. 
   * See your course material and access support for more details.
   *
   * NO additional HTML elements should be added to the index.html file.
   *
   * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
   *
   * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
   * 
   */
  
  /********** TEMPLATE GENERATION FUNCTIONS **********/
  function startPageTemplate() {
    $("main").html(`
        <section class="start">
          <h2>Welcome!</h2>
          <button id="start">Start Quiz</button>
        </section>
    `);
  }
  
  function questionTemplate(question, currentScore, currentQuestion) {
    $("main").html(`
        //need to render the current question
        <h3>${question}</h3>
        <form>
          <fieldset id="answer-choices">
            <ul>
                <li><input type="radio" name="answer-options" id="one" value="one"><label for="one">One</label></li>
                <li><input type="radio" name="answer-options" id="two" value="one"><label for="two">Two</label></li>
                <li><input type="radio" name="answer-options" id="three" value="one"><label for="three">Three</label></li>
                <li><input type="radio" name="answer-options" id="four" value="one"><label for="four">Four</label></li>
            <ul>
          </fieldset>
          <input type="submit" value="Submit">
        </form>
        <h3>Current Progress</h3>
          <p>Current Score: ${currentScore}/${currentQuestion}</p>
          <p>Current Question: ${currentQuestion}/5</p>
    `);
  }

  function feedbackTemplate (question, userAnswer) {
    $("main").html(`
        <section class="feedback">
          <h2>></h2>
          <p>The correct answer was: ${}</p>
          <button id="next-question>Next Question</button>
        </section>
    `);
  }

  function summaryTemplate(correctAnswers) {
    $("main").html(`
        <section class="summary">
          <h2>Quiz Summary</h2>
          <p>You got ${correctAnswers} out of 5 questions correct!</p>
          <button id="restart-quiz">Restart Quiz</button>
        </section>
    `);
  }

  
  // These functions return HTML templates
  
  /********** RENDER FUNCTION(S) **********/
  // Render function to handle other render functions
  function render() {
    if (store.quizStarted == false) {
      startPageTemplate();
    }
  }

  function renderStart() {

  }

  function renderProgress() {

  }

  functon renderFeedback() {

  }

  function renderSummary() {

  }

  function renderRestartQuiz() {

  }
  
  // This function conditionally replaces the contents of the <main> tag based on the state of the store
  
  
  /********** EVENT HANDLER FUNCTIONS **********/
  
  // These functions handle events (submit, click, etc)  

  function main() {
    render();
  }

  $(main);