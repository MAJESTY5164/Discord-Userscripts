(function() {
    window.copy = function(text) {
        const modalOverlay = document.createElement('div');
        modalOverlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);display:flex;justify-content:center;align-items:center;z-index:1000';
        
        const modalContent = document.createElement('div');
        modalContent.style.cssText = 'background-color:#2c2f33;padding:20px;border-radius:8px;width:300px;text-align:center;position:relative;box-shadow:0 4px 8px rgba(0,0,0,0.2)';
        
        const modalText = document.createElement('div');
        modalText.style.cssText = 'color:white;font-size:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%';
        modalText.textContent = text;  // Single line text content
        
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copy';
        copyButton.style.cssText = 'padding:8px 16px;background-color:#4CAF50;color:white;border:none;border-radius:6px;cursor:pointer;margin-top:20px';
        
        const cancelButton = document.createElement('button');
        cancelButton.textContent = 'Cancel';
        cancelButton.style.cssText = 'padding:8px 16px;background-color:#f44336;color:white;border:none;border-radius:6px;cursor:pointer;margin-top:20px';
        
        modalContent.appendChild(modalText);
        modalContent.appendChild(copyButton);
        modalContent.appendChild(cancelButton);
        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);

        // Copy text to clipboard when "Copy" button is clicked
        copyButton.addEventListener('click', () => {
            const tempInput = document.createElement('input');
            tempInput.value = text;  // Set the text to copy
            document.body.appendChild(tempInput);
            tempInput.select();  // Select the text
            document.execCommand('copy');  // Copy the selected text
            document.body.removeChild(tempInput);  // Clean up the DOM
            document.body.removeChild(modalOverlay);  // Close the modal
        });

        // Close modal if "Cancel" button is clicked
        cancelButton.addEventListener('click', () => {
            document.body.removeChild(modalOverlay);  // Close the modal
        });

        // Close modal if clicked outside the modal content
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                document.body.removeChild(modalOverlay);  // Close the modal
            }
        });
    }

    // Example usage (you can replace this with any text you'd like to copy)
    // window.copy('This is the text you want to copy!');  // Single line of text
// })();
