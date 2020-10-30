let point = 0;
let stage = 1;
let time = 15;
let fullTime = 15;
let widthTime = 0;


class Number{
    constructor(x) {
        this.x = x;
    }
    get X(){
        return this.x;
    }
    set X(x){
        return this.x = x;
    }
}

function getRandomNumber1(){
    let number1 = new Number();
    number1.X = Math.floor(Math.random() * 10);
    return number1.X;
}
function getRandomNumber2(){
    let number2 = new Number();
    number2.X = Math.floor(Math.random() * 10) + stage - 5;
    return number2.X;
}
function getRandomNumber3() {
    let number3 = new Number();
    number3.X = Math.floor(Math.random() * 10) + stage;
    return number3.X;
}
function getRandomNumber4() {
    let number4 = new Number();
    number4.X = Math.floor(Math.random() * 10) + stage + 5;
    return number4.X;
}


class Operator{
    constructor(ope) {
        this.ope = ope;
    }
    get OPE(){
        return this.ope;
    }
    set OPE(ope){
        return this.ope = ope;
    }
}

function getRandomOperator(){
    let operatorx = new Operator();
    let operators = ['+', '-'];
    let ran = Math.floor(Math.random() * operators.length);
    operatorx.OPE = operators[ran];
    return operatorx.OPE;
}
var showcal;
var space = '&nbsp'.repeat(4)  ;

function generateCalculation(){
    let num1 = getRandomNumber1();
    let num2 = getRandomNumber2();
    let oper = getRandomOperator();
    let cal = num1+' '+oper+' '+num2;
    let calfake = num1+space+oper+space+num2;
    showcal = cal;
    document.getElementById('calculation').innerHTML = calfake;
    document.getElementById('result').innerHTML = getRandomResult(cal);
}

function generateCalculation2(){
    let num1 = getRandomNumber1();
    let num2 = getRandomNumber2();
    let num3 = getRandomNumber3();
    let oper = getRandomOperator();
    let cal = num1+' '+oper+' '+num2+' '+oper+' '+num3;
    let calfake = num1+space+oper+space+num2+space+oper+space+num3;
    showcal = cal;
    document.getElementById('calculation').innerHTML = calfake;
    document.getElementById('result').innerHTML = getRandomResult(cal);
}

function generateCalculation3(){
    let num1 = getRandomNumber1();
    let num2 = getRandomNumber2();
    let num3 = getRandomNumber3();
    let num4 = getRandomNumber4();
    let oper = getRandomOperator();
    let cal = num1+' '+oper+' '+num2+' '+oper+' '+num3+' '+oper+' '+num4;
    let calfake = num1+space+oper+space+num2+space+oper+space+num3+space+oper+space+num4;
    showcal = cal;
    document.getElementById('calculation').innerHTML = calfake;
    document.getElementById('result').innerHTML = getRandomResult(cal);
}

class Clresult{
    constructor(rest) {
        this.rest = rest;
    }
    get REST(){
        return this.rest;
    }
    set REST(rest){
        return this.rest = rest;
    }
}

function getResult(){
    let realresult = new Clresult();
    realresult.REST = eval(showcal);
    return realresult.REST;
}

function getFakeResult(){
    let fakeresult = new Clresult();
    fakeresult.REST = getResult() + (Math.floor(Math.random()*3)) - (Math.floor(Math.random()*3));
    return fakeresult.REST;
}

function getRandomResult(){
    let results = [getFakeResult(),getResult()];
    let ren = Math.floor(Math.random() * results.length);
    return results[ren];
}

function countDown(){
    let timeDiv = document.getElementById('time');
    let run = setInterval(function (){
        time -= 0.1;
        timeDiv.style.width = widthTime * time/fullTime + 'px';
        if(time <=0){
            clearInterval(run);
            gameOver();
        }
    },100);
}

function check(btn){
    let result = +document.getElementById('result').innerHTML;
    let check = false;
    switch (btn) {
        case 'true':
            if (result === getResult()) check = true;
            break;
        case 'false':
            if (result !== getResult()) check = true;
            break;
    }
    check?nextLevel():gameOver();
}

function nextLevel() {
    point++;
    stage++;
    time = fullTime;
    document.getElementById("point").innerHTML = "Point: "+ point;
    document.getElementById("stage").innerHTML = "Stage: "+ stage;
    if (stage < 5) {
        generateCalculation();
    } else if (stage >= 5 && stage <= 10) {
        generateCalculation2();
    } else {
        generateCalculation3();
    }
}

function gameOver(){
    document.getElementById('true').style.display = 'none';
    document.getElementById('false').style.display = 'none';
    alert('Game Over, you got ' + point + ' point');
    location.reload();
}

function startGame(){
    time = fullTime;
    widthTime = document.getElementById('time').offsetWidth;
    document.getElementById('point').innerHTML = 'point: ' + point;
    document.getElementById('stage').innerHTML = 'stage: ' + stage;
    generateCalculation();
    countDown();
}


startGame();
