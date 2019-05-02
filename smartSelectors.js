const { openBrowser,goto,click,below,closeBrowser,toRightOf } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://www.makemytrip.com/");
        await click("Flights");
        await scrollDown("PRODUCT OFFERING");
        await click("flights",below("PRODUCT OFFERING"));
        await click("More",toRightOf("Giftcards"));
    } catch (e) {
        console.error(e);
    } finally {
        await closeBrowser();
    }
})();
