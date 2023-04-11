const fs = require('fs');

const content = "India is my country and all Indians are my brothers and sisters. I love my country and I am proud of its rich and varied heritage. I shall always strive to be worthy of it.";

fs.writeFile('myFile2.txt', content, (err) => {
    if (err) throw err;
    console.log('File saved successfully!');
});
