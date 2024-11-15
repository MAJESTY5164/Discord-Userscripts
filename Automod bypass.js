// Select the button container
const buttonContainer = document.querySelector('.buttonContainer_df39bd');

if (buttonContainer) {
    // Create the new button element
    const newButton = document.createElement('button');
    newButton.style.padding = '8px 16px';
    newButton.style.background = '#555';  // Dark button background
    newButton.style.color = 'white';
    newButton.style.border = 'none';
    newButton.style.borderRadius = '6px';
    newButton.style.cursor = 'pointer';
    newButton.style.fontSize = '16px';
    newButton.style.display = 'flex';
    newButton.style.alignItems = 'center';
    newButton.style.justifyContent = 'center';
    
    // Create the letter "B" as the icon
    const letterB = document.createElement('span');
    letterB.textContent = 'B';
    letterB.style.fontSize = '20px';
    letterB.style.fontWeight = 'bold';
    
    // Append the letter "B" to the button
    newButton.appendChild(letterB);
    
    // Append the button to the container
    buttonContainer.innerHTML = '';
    buttonContainer.appendChild(newButton);
    
    // Create modal overlay for the popup (Dark Mode)
    const modalOverlay = document.createElement('div');
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.top = '0';
    modalOverlay.style.left = '0';
    modalOverlay.style.width = '100%';
    modalOverlay.style.height = '100%';
    modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    modalOverlay.style.display = 'none';
    modalOverlay.style.justifyContent = 'center';
    modalOverlay.style.alignItems = 'center';
    modalOverlay.style.zIndex = '1000';

    // Modal content container
    const modalContent = document.createElement('div');
    modalContent.style.backgroundColor = '#2c2f33';  // Dark background for dark mode
    modalContent.style.padding = '20px';
    modalContent.style.borderRadius = '8px';
    modalContent.style.width = '250px'; // Narrower width for the modal
    modalContent.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    modalContent.style.textAlign = 'center';
    modalContent.style.position = 'relative';

    // Input field for the message (text box)
    const messageInput = document.createElement('textarea');
    messageInput.textContent = '';  // Default text
    messageInput.style.width = '100%';
    messageInput.style.height = '80px';  // Shorter height for the text box
    messageInput.style.padding = '0px';
    messageInput.style.fontSize = '14px';
    messageInput.style.backgroundColor = '#444';  // Dark text box background
    messageInput.style.color = 'white';  // White text for readability
    messageInput.style.border = '1px solid #555';  // Dark border for text box
    messageInput.style.borderRadius = '6px';
    messageInput.style.resize = 'none';  // Disable resizing
    messageInput.style.marginBottom = '15px';  // Space between text box and buttons
    messageInput.style.textAlign = 'center';
    messageInput.style.display = 'flex'; messageInput.style.justifyContent = 'center';  
    messageInput.style.alignItems = 'center'; // Center text vertically

    // Create a Copy button
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.style.padding = '8px 16px';
    copyButton.style.backgroundColor = '#4CAF50';
    copyButton.style.color = 'white';
    copyButton.style.border = 'none';
    copyButton.style.borderRadius = '6px';
    copyButton.style.cursor = 'pointer';
    copyButton.style.marginRight = '10px';

    // Create an Exit button
    const exitButton = document.createElement('button');
    exitButton.textContent = 'Exit';
    exitButton.style.padding = '8px 16px';
    exitButton.style.backgroundColor = '#f44336';
    exitButton.style.color = 'white';
    exitButton.style.border = 'none';
    exitButton.style.borderRadius = '6px';
    exitButton.style.cursor = 'pointer';

    // Append input, copy, and exit buttons to modal content
    modalContent.appendChild(messageInput);
    modalContent.appendChild(copyButton);
    modalContent.appendChild(exitButton);
    modalOverlay.appendChild(modalContent);

    // Append the modal to the body
    document.body.appendChild(modalOverlay);

    // Show the popup when the button is clicked
    newButton.addEventListener('click', () => {
        modalOverlay.style.display = 'flex';  // Show modal
    });

    // Hide the popup when the Exit button is clicked
    exitButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none';  // Hide modal
    });
// Copy the text from the text box with periods between each letter
copyButton.addEventListener('click', () => {
    // Get the text from the text box
    const text = messageInput.value;

    // Transform the text by adding periods between each letter
    const transformedText = text.split('').join('‪');

    // Create a temporary input element to hold the transformed text
    const tempInput = document.createElement('input');
    tempInput.value = transformedText;

    // Append the temporary input to the body
    document.body.appendChild(tempInput);

    // Select and copy the transformed text
    tempInput.select();
    document.execCommand('copy');

    // Remove the temporary input
    document.body.removeChild(tempInput);
});


}



