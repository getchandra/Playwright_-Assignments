let browser = "Chrome";
function checkBrowserVersion(callback) {
    // Asynchronous operation
    setTimeout(() => {  // Simulate an async operation with setTimeout
        callback(browser);    // Call the callback function with the browser version 
    }, 2000); // 2 seconds delay to simulate async operation
}
function displayBrowserVersion(version) { // Callback function to display the browser version
    console.log("Browser version is:", version); // Display the browser version
}   
checkBrowserVersion(displayBrowserVersion); // Pass the displayBrowserVersion function as a callback