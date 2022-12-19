let userInput : unknown; // any //string | number.
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') { //must this if check if not you will get un error.
    userName = userInput;
}

function generateError( message: string, code: number) : never{ //will never return anything so you can add the  : never to attend it will never return anything
    throw { message: message, errorCode: code};
}

generateError('an error occurred', 500);