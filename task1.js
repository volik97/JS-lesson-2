"use strict"

const count = process.argv[2];
const array = [];
let num = 1;

const check = (int) => {
    let i = int - 1;
    while (i > 1) {
        if( int % i === 0 ) return false;
        i--;
    }
    return true;
}

while (array.length < count) {
    if (check(num)) array.push(num);
    num++;
}



console.log(array);


