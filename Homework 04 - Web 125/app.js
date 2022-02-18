
// addition

document.getElementById('addition').onclick = function() {
    var number_1 =  +document.getElementById('number-1').value;
    var number_2 = +document.getElementById('number-2').value ; 
    var result = number_1 + number_2;
    document.getElementById('calculate').value = result;
}

// multiplication

document.getElementById('multiplication').onclick = function() {
    var number_1 =  +document.getElementById('number-1').value;
    var number_2 = +document.getElementById('number-2').value ; 
    var result = number_1 * number_2;
    document.getElementById('calculate').value = result;
}

// division

document.getElementById('division').onclick = function() {
    var number_1 =  +document.getElementById('number-1').value;
    var number_2 = +document.getElementById('number-2').value ; 
    var result = number_1 / number_2;
    document.getElementById('calculate').value = result;
}

// subtraction

document.getElementById('subtraction').onclick = function() {
    var number_1 =  +document.getElementById('number-1').value;
    var number_2 = +document.getElementById('number-2').value ; 
    var result = number_1 - number_2;
    document.getElementById('calculate').value = result;
}

// reset

document.getElementById('reset').onclick = function () {
    window.location.reload();
}