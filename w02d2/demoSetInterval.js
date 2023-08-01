
const intervalReference = setInterval(() => {
    console.log('MonkeyFuzz');
}, 500);


setTimeout(() => {
    clearInterval(intervalReference);
}, 2222);