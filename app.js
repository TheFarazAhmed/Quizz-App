function func1(){
    document.getElementById("nextbutton").disabled = false;
    
}

function gotologin(){
    window.location = "login.html";
}

var val, score=0,load=0,a=1;
var questions = [
    {

        "question": "DOM stands for ________",
        "option1": "Document Object Method",
        "option2": "Document Object Memory",
        "option3": "Document Object Module",
        "option4": "Document Object Model",
        "answer": "4"
    },
    {

        "question": "How can we open a window??",
        "option1": "window.open;",
        "option2": "window.open();",
        "option3": "win.open();",
        "option4": "window(open);",
        "answer": "2"
    },
    {

        "question": "Object comprises of ________",
        "option1": "property and string",
        "option2": "property and number",
        "option3": "property and value",
        "option4": "property and character",
        "answer": "3"
    },
    {

        "question": "We can check whether a property is present in an object, using the keyword ______",
        "option1": "in",
        "option2": "this",
        "option3": "has",
        "option4": "prototype",
        "answer": "1"
    },
    {

        "question": "How can e delete a property named prop1 inside an object named obj1 ?? ",
        "option1": "del prop1;",
        "option2": "delete prop1;",
        "option3": "delete obj1.prop1;",
        "option4": "delete prop1.obj1;",
        "answer": "3"
    },
    {

        "question": "history.back(); is same as ________",
        "option1": "history(previous);",
        "option2": "window.history(-1)",
        "option3": "history(-1);",
        "option4": "history.go(-1);",
        "answer": "4"
    },
    {

        "question": "What will be returned by doing 'window.location.hash' if we are currently at the wesite 'https//www.example.com'",
        "option1": "empty string",
        "option2": "www.example.com",
        "option3": "https://",
        "option4": ".com",
        "answer": "1"
    },
    {

        "question": "history.go(2);  is same as _____________",
        "option1": "history.forward(2);",
        "option2": "history.forward();  history.forward();",
        "option3": "load previous 2 pages at once from the server",
        "option4": "load previous 2 pages at once from the cache",
        "answer": "2"
    },
    {

        "question": "If we want to define a method as property outside of an object, we will do _________",
        "option1": "object_name.function func1() { ..... };",
        "option2": "object_name.func1() : function { ..... };",
        "option3": "object_name.func1() = function { ..... };",
        "option4": "function object_name.func1() { ..... };",
        "answer": "3"
    },
    {

        "question": "which of the following is correct",
        "option1": "var w = window.open('''', ''win1'', ''width=420,height=380,left=200,top=100'');",
        "option2": "var w = window.open(''win1'', ''width=420,height=380,left=200,top=100'');",
        "option3": "var w = window.open(''win1'', ''left=200,top=100,width=50,height=50'');",
        "option4": "var w = window.open(''win1'', ''width=50,height=50,left=200,top=100'');",
        "answer": "1"
    }
];

var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

document.getElementById("qnum").innerHTML = a++;
question.innerHTML = questions[load].question;
option1.innerHTML = questions[load].option1;
option2.innerHTML = questions[load].option2;
option3.innerHTML = questions[load].option3;
option4.innerHTML = questions[load].option4;
val = document.querySelector("input[name='option']:checked");

function next(){
    document.getElementById("qnum").innerHTML = a++;

    val = document.querySelector("input[name='option']:checked");

    if(val === null)
    {
     document.getElementById("nextbutton").disabled = true;
    }
    else{
        if(val.value === questions[load].answer){
            score = score + 1;
            }
        if(questions.length-1 === load)
        {
            document.getElementById("quizcontainer").style.display= "none";
            document.getElementById("resultcontainer").style.display = "block";
            document.getElementById("score").innerHTML = "Waiting for Result Calculation . . ."
            var score2 = Math.ceil((score/questions.length) * 100);
            if(score2 < 60.0)
            msg = "Sorry, you have failed";
            else
            msg = "Congratulations, you have passed";
            setTimeout(function(){
                document.getElementById("score").innerHTML = "your score is " + score2 + " %" + "<br><br>" + msg;
                document.getElementById("buttlogout").style.visibility="visible";
            }, 3000);
        }
        else{
            document.querySelector("input[name='option']:checked").checked = false;
        load++;
        question.innerHTML = questions[load].question;
        option1.innerHTML = questions[load].option1;
        option2.innerHTML = questions[load].option2;
        option3.innerHTML = questions[load].option3;
        option4.innerHTML = questions[load].option4;
        }
    }

    // document.querySelector("input[name='option']").checked = false;
    document.getElementById("nextbutton").disabled = true;
}

function startTimer(duration, display) {
    var timerr = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timerr / 60, 10)
        seconds = parseInt(timerr % 60, 10);

        if(minutes<10)
        minutes="0"+minutes;
        else
        minutes = minutes;

        if(seconds<10)
        seconds="0"+seconds;
        else
        seconds = seconds;
    
        display.textContent = minutes + ":" + seconds;

        if(display.textContent === "00:00")
            timeended();

        if (--timerr < 0) {
            timerr = duration;
        }
    }, 1000);
}

function timerfunc() {
    var TotalTime = 60 * 5,
        display = document.querySelector('#timer');
    startTimer(TotalTime, display);
}

function timeended(){
            document.getElementById("quizcontainer").style.display= "none";
            document.getElementById("timer").style.display = "none";
            document.getElementById("resultcontainer").style.display = "block";
            document.getElementById("score").innerHTML = "Waiting for Result Calculation . . ."
            var score2 = Math.ceil((score/questions.length) * 100);
            if(score2 < 60.0)
            msg = "Sorry, you have failed";
            else
            msg = "Congratulations, you have passed";
            setTimeout(function(){
                document.getElementById("score").innerHTML = "your score is " + score2 + " %" + "<br><br>" + msg;
                document.getElementById("buttlogout").style.visibility="visible";
            }, 3000);
            // setTimeout(function(){ document.getElementById("buttlogout").style.display="block"; }, 500);
}