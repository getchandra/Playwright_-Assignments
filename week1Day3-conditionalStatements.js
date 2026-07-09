
/* Assignment: Odd or Even */
function isOddOrEven(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
isOddOrEven(4);
isOddOrEven(7);
isOddOrEven(1);


/* Assignment: Number Type */
function numberCheck (num) {
  if (num > 0) {
    console.log("Positive");
  } else if (num < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}
numberCheck(5);
numberCheck(-3);
numberCheck(0);

/* Assignment: Conditional Statements */
/* ifElse inside function */
function launchBrowser(browserName) {
  if (browserName === "chrome") {
    console.log("Chrome browser launched");
  } else {
    console.log("other browser launched");
  }
}
launchBrowser("chrome");

/* Switch statement inside function */
function runTests(testType) {
  switch (testType) {
    case "unit":
      console.log("Running unit tests...");
      break;
    case "integration":
      console.log("Running integration tests...");
      break;
    case "e2e":
      console.log("Running e2e tests...");
      break;
    case "regression":
      console.log("Running regression tests...");
      break;
    default:
      console.log("other browser launched");
  }
}
runTests("regression");

