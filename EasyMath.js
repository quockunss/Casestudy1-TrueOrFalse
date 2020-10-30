let point = 0;
let stage = 1;
let time = 10;
let fullTime = 10;
let widthTime = 0;


class number{
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
    let number1 = new number();
    number1.X = Math.floor(Math.random()*10);
    return number1.X;
}
function getRandomNumber2(){
    let number2 = new number();
    number2.X = Math.floor(Math.random()*10);
    return number2.X;
}

class operator{
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
    let operatorx = new operator();
    let operators = ['+', '-', '*'];
    let ran = Math.floor(Math.random() * operators.length);
    operatorx.OPE = operators[ran];
    return operatorx.OPE;
}

function generateCalculation(){
    let num1 = getRandomNumber1();
    let num2 = getRandomNumber2();
    let oper = getRandomOperator();
    let cal = num1 + ' ' + oper + ' ' + num2;
    document.getElementById('calculation').innerHTML = cal;
    document.getElementById('result').innerHTML = getRandomResult(cal);
}

class clresult{
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
    let realresult = new clresult();
    let cal = document.getElementById('calculation').innerHTML;
    realresult.REST = eval(cal);
    return realresult.REST;
}

function getFakeResult(){
    let fakeresult = new clresult();
    fakeresult.REST = getResult() + (Math.floor(Math.random()*10)) - (Math.floor(Math.random()*10));
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
    generateCalculation();
}

function gameOver(){
    document.getElementById('true').style.display = 'none';
    document.getElementById('false').style.display = 'none';
    alert('Game Over');
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
