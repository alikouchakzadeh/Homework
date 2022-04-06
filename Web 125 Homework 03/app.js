var client_sum = 0;

var cpu_sum = 0;


document.getElementById('rock').onclick = function() {
    document.getElementById('client').innerHTML = "rock";
    client = "rock";
    var game = ["rock" , "paper" , "scissors"];
    var rand = game[Math.floor(Math.random() * game.length)];
    document.getElementById('computer').innerHTML = rand;

    if (client == "rock" && rand == "rock") {
        document.getElementById('answer').innerHTML = "Equal";
        document.getElementById('answer').style.background = 'yellow';
        document.getElementById('answer').style.color = 'red';
    } else if (client == "rock" && rand == "scissors" ) {
        document.getElementById('answer').innerHTML = "You win";
        document.getElementById('answer').style.background = 'green';
        document.getElementById('answer').style.color = 'black';
        client_sum ++;
        document.getElementById('clientsum').innerHTML = client_sum;
    } else if (client == "rock" && rand == "paper") {
        document.getElementById('answer').innerHTML = "PC win";
        document.getElementById('answer').style.background = 'red';
        document.getElementById('answer').style.color = 'blue';
        cpu_sum ++;
        document.getElementById('cpusum').innerHTML = cpu_sum;
    }
}

document.getElementById('paper').onclick = function() {
    document.getElementById('client').innerHTML = "paper";
    client = "paper";
    var game = ["rock" , "paper" , "scissors"];
    var rand = game[Math.floor(Math.random() * game.length)];
    document.getElementById('computer').innerHTML = rand;

    if (client == "paper" && rand == "paper") {
        document.getElementById('answer').innerHTML = "Equal";
        document.getElementById('answer').style.background = 'yellow';
        document.getElementById('answer').style.color = 'red';
    } else if (client == "paper" && rand == "rock" ) {
        document.getElementById('answer').innerHTML = "You win";
        document.getElementById('answer').style.background = 'green';
        document.getElementById('answer').style.color = 'black';
        client_sum ++;
        document.getElementById('clientsum').innerHTML = client_sum;
    } else if (client == "paper" && rand == "scissors") {
        document.getElementById('answer').innerHTML = "PC win";
        document.getElementById('answer').style.background = 'red';
        document.getElementById('answer').style.color = 'blue';
        cpu_sum ++;
        document.getElementById('cpusum').innerHTML = cpu_sum;
    }
}

document.getElementById('Scissors').onclick = function() {
    document.getElementById('client').innerHTML = "Scissors";
    client = "Scissors";
    var game = ["rock" , "paper" , "Scissors"];
    var rand = game[Math.floor(Math.random() * game.length)];
    document.getElementById('computer').innerHTML = rand;

    if (client == "Scissors" && rand == "Scissors") {
        document.getElementById('answer').innerHTML = "Equal";
        document.getElementById('answer').style.background = 'yellow';
        document.getElementById('answer').style.color = 'red';
    } else if (client == "Scissors" && rand == "paper" ) {
        document.getElementById('answer').innerHTML = "You win";
        document.getElementById('answer').style.background = 'green';
        document.getElementById('answer').style.color = 'black';
        client_sum ++;
        document.getElementById('clientsum').innerHTML = client_sum;
    } else if (client == "Scissors" && rand == "rock") {
        document.getElementById('answer').innerHTML = "PC win";
        document.getElementById('answer').style.background = 'red';
        document.getElementById('answer').style.color = 'blue';
        cpu_sum ++;
        document.getElementById('cpusum').innerHTML = cpu_sum;
    }
}

