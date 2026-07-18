/*1. Load Red Bus in an Edge browser instance and verify the page title and URL.
2. Load Flipkart in a Webkit browser instance and verify the page title and URL.  */

//Red Bus (Edge): o Load the home page and print the page title and current URL.

import { chromium, webkit, test } from "@playwright/test"; // Importing the necessary modules from Playwright
import { title } from "node:process"; // Importing the title from the process module (not used in this code)

test("RedBus launch", async () => { // Test case for launching RedBus in Edge browser
    const browser = await chromium.launch({channel: "msedge", headless: false}); // Launching Edge browser in non-headless mode
    const context = await browser.newContext();// Creating a new browser context
    const page = await context.newPage();// Creating a new page in the browser context
    await page.goto("https://www.redbus.in/");// Navigating to the RedBus home page
    console.log("Page title:", await page.title());// Printing the page title to the console
    console.log("Page URL:", page.url());// Printing the current page URL to the console
});

//Flipkart (Webkit): o Load the home page and print the page title and current URL
test("Flipkart launch", async () => { // Test case for launching Flipkart in Webkit browser
    const browser = await webkit.launch({headless: false}); // Launching Webkit browser in non-headless mode
    const context = await browser.newContext(); // Creating a new browser context
    const page = await context.newPage(); // Creating a new page in the browser context
    await page.goto("https://www.flipkart.com/");// Navigating to the Flipkart home page
    console.log("Page title:", await page.title());// Printing the page title to the console
    console.log("Page URL:", page.url());// Printing the current page URL to the console
});
