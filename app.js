let getVal = ((value) => {
    value = Math.floor(Math.random() * 10 + 1);
    console.log('The value for the global number has been stored!')
    return value
});//this returns a number between 

let gNum = getVal();