const myPromise = new Promise((resolve, reject) => {
  // some long running process
  // if (err) {
  //   reject(err)
  // } else {
  //   resolve(data)
  // }

  // resolve([{ username: 'alice' }, { username: 'bob' }]) // calls the .then((data) => {})
  reject('oops something terrible happened!') // calls the .catch()
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('inside the error handler');
    console.log(err);
  });
