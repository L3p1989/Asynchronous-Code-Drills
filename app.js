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
});