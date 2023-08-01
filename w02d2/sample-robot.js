function sleepFor(sleepDuration) {
  const nowObject = new Date();
  // console.log("nowObject:",JSON.stringify(nowObject));
  const now = nowObject.getTime();
  while (new Date().getTime() < now + sleepDuration) {
    /* do nothing */
  }
}

function doAction(name, duration, nextAction){
  console.log(`Starting ${name}`);
  setTimeout(() => {
    console.log(`Ending ${name}`);
    if (nextAction){
      nextAction();
    }
  }, duration);
}

//
// look
//
const look = () => {
  doAction('look', 500, look);
};

//
// getUp
//
const getUp = () => {
  doAction('getUp', 3000, walk);
};

//
// walk
//
const walk = () => {
  doAction('walk', 6000, openTheDoor);
};

//
// openTheDoor
//
const openTheDoor = () => {
  doAction('openTheDoor', 4500, walkThroughTheDoor);
};

//
// walkThroughTheDoor
//
const walkThroughTheDoor = () => {
  doAction('walkThroughTheDoor', 1500, null);
};

look();
getUp();

setTimeout(() => {
  console.log('I am scheduled to run 2000 ms into the future.');
}, 2000);

sleepFor(7000);
console.log("This is the end of the main thread.");
// The event loop cannot start until the main thread has finished.

