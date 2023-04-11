const fs = require('fs');

// Read employee personal detail file
fs.readFile('employee_personal_details.txt', (err, personalDetails) => {
    if (err) {
        console.error(err);
        return;
    }

    // Read employee project detail file
    fs.readFile('employee_project_details.txt', (err, projectDetails) => {
        if (err) {
            console.error(err);
            return;
        }

        // Merge the content of both files
        const mergedContent = `${personalDetails}\n${projectDetails}`;

        // Write merged content to new file
        fs.writeFile('employee_details.txt', mergedContent, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Merged employee details saved to file.');
        });
    });
});
