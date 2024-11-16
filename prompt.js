window.prompt = function(message, defaultValue = "") {
    return new Promise((resolve, reject) => {
        // Create the modal container
        const modalOverlay = document.createElement('div');
        modalOverlay.style.position = 'fixed';
        modalOverlay.style.top = '0';
        modalOverlay.style.left = '0';
        modalOverlay.style.width = '100%';
        modalOverlay.style.height = '100%';
        modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modalOverlay.style.display = 'flex';
        modalOverlay.style.justifyContent = 'center';
        modalOverlay.style.alignItems = 'center';
        modalOverlay.style.zIndex = '9999';

        // Create the modal content container
        const modalContent = document.createElement('div');
        modalContent.style.backgroundColor = '#2f3136';
        modalContent.style.padding = '20px';
        modalContent.style.borderRadius = '8px';
        modalContent.style.minWidth = '300px';
        modalContent.style.textAlign = 'center';
        modalContent.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';
        modalContent.style.color = '#fff';

        // Create the message text
        const messageText = document.createElement('p');
        messageText.textContent = message;
        modalContent.appendChild(messageText);

        // Create the input field for user input
        const input = document.createElement('input');
        input.type = 'text';
        input.value = defaultValue;
        input.style.width = '100%';
        input.style.padding = '10px';
        input.style.marginBottom = '15px';
        input.style.border = '1px solid #444';
        input.style.borderRadius = '4px';
        input.style.color = '#fff';
        input.style.backgroundColor = '#444';
        input.style.fontSize = '16px';
        modalContent.appendChild(input);

        // Create the "OK" button
        const okButton = document.createElement('button');
        okButton.textContent = 'OK';
        okButton.style.backgroundColor = '#4CAF50';
        okButton.style.color = 'white';
        okButton.style.border = 'none';
        okButton.style.padding = '10px 20px';
        okButton.style.borderRadius = '6px';
        okButton.style.cursor = 'pointer';
        okButton.style.marginRight = '10px';
        modalContent.appendChild(okButton);

        // Create the "Cancel" button
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.style.backgroundColor = '#f44336';
        cancelButton.style.color = 'white';
        cancelButton.style.border = 'none';
        cancelButton.style.padding = '10px 20px';
        cancelButton.style.borderRadius = '6px';
        cancelButton.style.cursor = 'pointer';
        modalContent.appendChild(cancelButton);

        // Add event listeners to the buttons
        okButton.addEventListener('click', () => {
            resolve(input.value);
            document.body.removeChild(modalOverlay); // Close the modal
        });

        cancelButton.addEventListener('click', () => {
            resolve(null); // Resolve with null if canceled
            document.body.removeChild(modalOverlay); // Close the modal
        });

        // Append modal content to the modal overlay and modal overlay to the body
        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);
    });
}

//   Example usage
// customPrompt("Enter your username:", "default_username").then(result => {
//    if (result !== null) {
//        console.log("User input:", result);
//    } else {
//        console.log("User canceled the prompt.");
//    }
//});
