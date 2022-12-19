console.log("Ortal!!");

function addBasic (n1: number, n2: number, showResult: boolean, resultPhase: string) {
    // if(typeof n1 !== 'number' || typeof n2 !== 'number'){
    //     throw new Error('Incorrect Input');
    // }
    if (showResult) {
        console.log(resultPhase + (n1 + n2));
    } else {
       return n1 + n2; 
    } 
}

let number1: number; //'5';
number1 = 5 ; //'5';

const number2 = 2.8;
const printResult = true;

let resultPhase = "Result is: ";
//resultPhase = 0;


const result = addBasic(number1, number2, printResult, resultPhase);
console.log(result);