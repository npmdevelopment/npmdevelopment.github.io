// Function to copy installation command to clipboard
document.getElementById('copy-installation').addEventListener('click', function() {
    const command = 'npm install npmjs-file';
    navigator.clipboard.writeText(command).then(() => {
        alert('Installation command copied to clipboard: ' + command);
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
});
