let getVal = ((value) => {
    value = Math.floor(Math.random() * 10 + 1);
    console.log('The value for the global number has been stored!');
    return value;
});//this returns a number between 1-10 and logs statement to console.

let gNum = getVal();//this assigns return value from getVal to gNum.

let changeVal = ((sum) => {
    sum = gNum * 4;
    console.log(sum);
});//multiplies gNum by 4 and then logs sum

setTimeout(() => {
    changeVal();
}, 2000);//calls `changeVal` after 2 sec

let getWords = (() => {
    console.log('a word');
    setTimeout(() => {
        console.log('another word');
    }, 3000);
    setTimeout(() => {
        console.log('a third word');
    }, 2000);
    setTimeout(() => {
        console.log('a fourth word');
    }, 1000)
});//logs 'a word', 'a fourth word', 'a third word', and 'another word' to console

getWords();

let countdown = ((num, callback) => {
    num = num * 1000;
    setTimeout(() => {
        callback();
    }, num);
});//calls function after num seconds have passed

let done = (() => {
    console.log('a message');
});//logs 'a message'

countdown(3.5, done);//calls `countdown()` to call `done()` after 3.5 sec

let isIt = (() => {
    setTimeout(() => {
        if(gNum % 2 === 0) {
        return true;
    } else return false;
    }, 2010);
});//fancy way of saying true; gNum will always be even   
    

let mayIOrder = setTimeout (() => {
    isIt();
}, 2020);//waits 2.2 value of `isIt()`

let orderingChickenSandwich = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(mayIOrder) {
            let order = {
                sandwich: 'Chicken',
                veggies: 'Lettuce'
            }; resolve(order);
    } else {
        let err = new Error('No!');
        reject(err);
    };
    }, 2030);
});//waits 2.3 seconds and then determines if mayIOrder is true;

let orderFood = (async() => {
    let result = await orderingChickenSandwich;
    console.log("Here's your " + result.sandwich + " and " + result.veggies + ' sandwich!');
});//function waits for orderingChickenSandwich and then logs the result

orderFood();