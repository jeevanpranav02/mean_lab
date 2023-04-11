const fs = require('fs');

const filePath = 'myFile2.txt';
const newLine = '\nI shall give respect to my parents, teachers and elders and treat everyone with courtesy.';

fs.appendFile(filePath, newLine, function (err) {
    if (err) throw err;
    console.log('New line added to file');
});
