const fs = require('fs');

// Read employee personal detail file
const personalDetails = fs.readFileSync('employee_personal_details.txt', 'utf-8');

// Read employee project detail file
const projectDetails = fs.readFileSync('employee_project_details.txt', 'utf-8');

// Merge the content of both files
const mergedContent = `${personalDetails}\n${projectDetails}`;

// Write merged content to new file
fs.writeFileSync('employee_details_with_sync.txt', mergedContent);

console.log('Merged employee details saved to file.');
