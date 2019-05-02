const { openBrowser, goto, click, below, screenshot, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("http://www.practiceselenium.com/welcome.html");
        await click("See Collection",below("Herbal Tea"));
        await screenshot({path : '<path-to-store>/screenshot.png'});
    } catch (e) {
        console.error(e);
    } finally {
        await closeBrowser();
    }
})();
