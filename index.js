// Code your solutions in this file

const names = ["Guadalipe", "Ollie", "Aki"];

function writeCards(names) {
    for (let i = 0; i < names.length; i++) {

    names[i] = (`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return names;
}

writeCards(names);


function countDown(num) {
    let i = 0
    while (i <= num) {
        console.log(num--);
    }
}