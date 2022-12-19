function add(n1 : number, n2: number) {
    return n1 + n2;
}

function printResults (num: number ): void {
    console.log('Result: '+ num);
}
function addAndHandle(n1: number, n2:number ,cb : (num : number) => void){
    const result = n1 + n2;
    cb(result);
}

printResults(add(5,12));

let combineValues: (a: number, b:number) => number;
combineValues = add;
//combineValues = printResults;
//combineValues = 5;
console.log(combineValues(8,8));

let a = addAndHandle ( 5, 7, (res : number) => { 
    console.log(res);
    return res;
});

console.log('a' + a);