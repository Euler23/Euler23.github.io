// FONCTION GLOBALE

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function noreg() {
    alert("l'inscription est fermée pour l'instant");
}



// FONCTIONS NOTE
function ob() {
    var el = document.getElementById("note");
    el.classList.toggle("ob");
}

function st() {
    var el = document.getElementById("note");
    el.classList.toggle("st");
}

function u() {
    var el = document.getElementById("note");
    el.classList.toggle("u");
}

function b() {
    var el = document.getElementById("note");
    el.classList.toggle("b");
}

function del() {
    document.getElementById("note").innerHTML = " ";
    console.log("yes");
}

function del1() {
    document.getElementById("note").innerHTML -= " ";
    console.log("yes");
}


// FONCTIONS CALC2
function resoudre() {
    var valA = document.getElementById("A").value;
    var valB = document.getElementById("B").value;
    var valC = document.getElementById("C").value;
    var delta;
    delta = B * B - 4 * A * C;
    console.log(valA, valB, valC, delta);
    document.getElementById("ecran3").innerHTML = 'delta ' + '= ' + parseFloat(delta);
}






// FONCTIONS CALCULATRICE
var x = null;

function une() {
    document.getElementById('calc-ecran').value += 1;
    x += 1;
}

function deux() {
    document.getElementById('calc-ecran').value += 2;
    x += 2;
}

function trois() {
    document.getElementById('calc-ecran').value += 3;
    x += 3;
}

function eq() {
    document.getElementById('calc-ecran').value = eval(document.getElementById('calc-ecran').value);
}

function somme() {
    document.getElementById('calc-ecran').value += '+';
    x += '+';
}

function Ac() {
    document.getElementById('calc-ecran').value = '';
    x = 0;
}

function quatre() {
    document.getElementById('calc-ecran').value += 4;
    x += 4;
}

function cinq() {
    document.getElementById('calc-ecran').value += 5;
    x += 5;
}

function six() {
    document.getElementById('calc-ecran').value += 6;
    x += 6;
}

function sept() {
    document.getElementById('calc-ecran').value += 7;
    x += 7;
}

function huit() {
    document.getElementById('calc-ecran').value += 8;
    x += 8;
}

function neuf() {
    document.getElementById('calc-ecran').value += 9;
    x += 9;
}

function zero() {
    document.getElementById('calc-ecran').value += 0;
    x += 0;
}

function point() {
    document.getElementById('calc-ecran').value += '.';
    x += '.';
}

function div() {
    document.getElementById('calc-ecran').value += '/';
    x += '/';
}

function fois() {
    document.getElementById('calc-ecran').value += '*';
    x += '*';
}

function moins() {
    document.getElementById('calc-ecran').value += '-';
    x += '-';
}

// FONCTIONS POMODORE
var min = 0; // minutes
var sec = 0; // seconds

function increment() {
    sec++;
    document.getElementById('tm').textContent = '0' + min + ':' + sec;
    if (sec == 60) {
        sec = -1;
        min++;
    }
    if (min == 25) {
        stop;
    }
}

function start() {
    setInterval(increment, 1000);
}

// FONCTIONS MULTIPLICATION
function tab() {
    var x = document.getElementById('nombre').value;
    var i;
    for (i = 1; i <= 10; i++) {
        //document.write(i + '*' + x + ' = ' + i * x + "\n\n\n");
        document.getElementById('res').innerHTML += i + ' x ' + x + ' = ' + i * x + "\n";
    }
}

function cleartab() {
    document.getElementById('res').innerHTML = "";
}