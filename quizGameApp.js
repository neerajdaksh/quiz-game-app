var chalk = require("chalk");
var readlineSync = require("readline-sync");
var score = 0;

console.log(chalk.bold.bgBlue("Welcome To kaun khelega quiz"));
console.log("-------------");
//take user name
var userName = readlineSync.question(chalk.red("What's Your Name:"));
console.log(chalk.blue("Welcome " + chalk.bold.green(userName)));
console.log("------------");

//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(
    chalk.bold.green(question) + "\n" + chalk.bold.magenta("Type Option: ")
  );
  if (userAnswer === answer) {
    console.log(chalk.underline.green("Right"));
    score = score + 1;
  } else {
    console.log(chalk.underline.red("wrong"));
  }
  console.log(chalk.magenta("--------------"));
}

//array of object

var questionList = [
  {
    question: `Q: What is the maximum number of Members in Lok Sabha?
a:512
b:542 
c:552 
d:532`,
    answer: "c",
  },
  {
    question: `Q: Where was India’s first national Museum opened?
a:Delhi
b:Hyderabad
c:Rajasthan
d:Mumbai`,
    answer: "d",
  },
  {
    question: `Q: In 2019, Which popular singer was awarded the Bharat Ratna 
    award?
a:Lata Mangeshkar
b:Asha Bhosle
c:Bhupen Hazarika 
d:Manna Dey `,
    answer: "c",
  },
  {
    question: `Q: The world’s nation 5G mobile network was launched by which 
    country?
a:Japan
b:Asia
c:South Korea
d:Malaysia`,
    answer: "c",
  },
  {
    question: `Q: When was Pravasi Bhartiya Divas held in Varanasi?
a:2017
b:2015
c:2019
d:2020`,
    answer: "c",
  },
  {
    question: `Q: Vijay Singh (golf player) is from which country?
a:UK
b:USA
c:India
d:Fiji`,
    answer: "d",
  },
  {
    question: `Q: The green planet in the solar system is?
a:Mars
b:Uranus
c:Venus
d:Earth`,
    answer: "b",
  },
  {
    question: `Q: Which of these is the small-scale industry in India?
a:Jute industry
b:Paper Industry
c:Textile Industry
d:Handloom Industry`,
    answer: "d",
  },
  {
    question: `Q: What is the name of the first Indian woman who wins the Man 
    Booker Prize?
a:Salman Rushdie
b:Arundhati Roy
c:V.S. Naipaul
d:Kiran Desai`,
    answer: "b",
  },
  {
    question: `Q: The largest public sector undertaking in the country is?
a:Railways
b:Airways
c:Roadways
d:Iron and Steel Plants`,
    answer: "a",
  },
];

for (var i = 0; i < questionList.length; i++) {
  //array index
  var currentQuestion = questionList.length;
  //select random questions
  var randomQuestion = parseInt(Math.random() * currentQuestion);
  //call play function
  play(
    questionList[randomQuestion].question,
    questionList[randomQuestion].answer
  );
}
console.log(chalk.green("Total Scored: ", score));
