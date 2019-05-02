const { openBrowser, goto, click, loadPlugin, closeBrowser } = require('taiko');
const {ID, clientHandler, startScreencast, stopScreencast } = require('taiko-screencast');
loadPlugin(ID, clientHandler);
(async () => {
    try {
        await openBrowser();
        await startScreencast('<pathWhereYouWantToKeepGif>/selenium_testwebsite.gif');
        await goto('http://www.practiceselenium.com/welcome.html');
        await click("Our Passion");
        await click("Menu");
        await click("Check Out");
        await click("Log In");
        await stopScreencast();
	;
    } catch (e) {
        console.error(e);
    } finally {
        await closeBrowser();
    }
})();
