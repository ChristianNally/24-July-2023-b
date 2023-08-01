const fs = require('fs');


// FILE READ

fs.readFile('filepath.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('Data:', data); // we know we got good data back from the file
  }
});


// READING DATA FROM THE WEB
axios.get({
  url: 'http://example.com/data.json',
  success: (data) => {
    console.log('data', data);
  },
  failure: (error) => {
    console.log('error', error);
  },
});