// JavaScript code to search for "transitionTo" in the dev console logs
(function() {
    const searchTerm = "transitionTo";
    
    // Store the original console.log function
    const originalLog = console.log;

    // Override console.log to capture logs
    console.log = function(...args) {
        // Check if the search term exists in any of the log arguments
        args.forEach(arg => {
            if (typeof arg === "string" && arg.includes(searchTerm)) {
               setTimeout(window.AutoModButton, 1000);
            }
        });

        // Call the original console.log to still print the log to the console
        originalLog.apply(console, args);
    };
})();
