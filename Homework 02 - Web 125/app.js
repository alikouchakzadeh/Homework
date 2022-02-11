var answer = prompt('Choos your time ...');
console.log(answer);

if (answer >=8 && answer<10) {
    document.getElementById('todo').innerText = "Wake Up";
} else if (answer>=10 && answer<12) {
    document.getElementById('todo').innerText = "Go to work";
} else if (answer>=12 && answer<13) {
    document.getElementById('todo').innerText = "Lunch";
} else if (answer>=13 && answer<17) {
    document.getElementById('todo').innerText = "Go to work";
} else if (answer>=17 && answer<19) {
    document.getElementById('todo').innerText = "Gym";
} else if (answer>=19 && answer<20) {
    document.getElementById('todo').innerText = "Dinner Time";
} else if (answer>=20 && answer<=22) {
    document.getElementById('todo').innerText = "Watch TV";
} else if (answer>22 && answer<24) {
    document.getElementById('todo').innerText = "Time To Sleep";
} else {
    document.getElementById('todo').innerText = "You should be sleeping";
}