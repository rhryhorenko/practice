/*
 var Person = function(name, age, job){
 this.name = name;
 this.age = age;
 this.job = job;
 }

 Person.prototype.information = function () {
 console.log(`${this.name} is ${this.age} and works as a ${this.job}`);
 }
 var jane = new Person();

 if(jane.hasOwnProperty('name')){
 jane.information();
 }
 var john = new Person('John', 20, 'Programmer');
 var mark = new Person('Mark', 60, 'Farmer');
 john.information();
 mark.information();

 console.log(Person.prototype);
 */
/*

 var personProto = {
 name,
 getName: function () {
 return this.name;
 }
 }

 var max = Object.create(personProto);
 var jane = Object.create(personProto, {
 name: {value: "Jane"},
 lastName: {value: "Kazhemiakina"},
 job: {value: "QA Engineer"}
 });
 */

// callback functions 


/*function calcArray(arr, fn) {
 var arrRes = [];
 for (var i = 0; i<arr.length; i++){
 var res = fn(arr[i]);
 arrRes.push(res);
 }
 return arrRes;
 }

 function age(el) {
 return 2019 - el;
 }

 var log = calcArray([1998,1971,1972,2023], age);

 console.log(log);*/


/*
 function inteviewQuestions(job) {
 if (job == "QA") {
 return function (name) {
 console.log(name + ', describe what is Test plane?');
 }
 } else if (job == "programmer") {
 return function (name) {
 console.log(name + ', what is your language stack?');
 }
 }
 else {
 console.log("Hmm, what do you do?")
 }
 }

 var questionForQa = inteviewQuestions("QA");
 questionForQa('Jane');
 inteviewQuestions('programmer')('Rodion');*/


/*
 function interviewQuestions(job) {
 return function (name) {
 if(job === 'QA'){
 console.log(name + ', describe what is Test plane?');
 }
 else if(job === 'programmer'){
 console.log(name + ', what is your language stack?');
 }
 else {
 console.log(name+', what do you do?')
 }
 }
 }

 var qaInterview = interviewQuestions('QA');
 var progInterview = interviewQuestions('programmer');
 qaInterview('Jane');
 progInterview('Rodion');
 interviewQuestions('teacher')('Dennis');
 */


// Code challenge
var questions = [];

questions.push(new Question('Is JavaScript is the coolest language?', ['Yes', 'No'], 0));
questions.push(new Question('What is my name?', ['Evgeniy', 'Alex', 'Rodion'], 2));
questions.push(new Question('Will I be a programmer?', ['No', 'Yes', 'Sure'], 2));

function Question(question, answer, correctAnswer) {
    this.question = question;
    this.answer = answer;
    this.correctAnswer = correctAnswer;
    this.printQuestion = function (arr) {
        var index = (Math.round(Math.random() * (arr.length - 1)));
        console.log(arr[index].question);
        for (var i = 0; i < arr[index].answer.length; i++) {
            console.log(i + ' ' + arr[index].answer[i]);
        }
        var userAnswer = prompt('Enter your answer: ')
        if ( userAnswer == arr[index].correctAnswer) {
            console.log('You are absolutely right!');
        }
        else {
            console.log('Hui')
        }
    }

}

questions[0].printQuestion(questions);
















