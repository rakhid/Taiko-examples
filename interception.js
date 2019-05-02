const { openBrowser, goto, intercept, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://www.makemytrip.com/");
        await intercept("https://www.makemytrip.com/");
        await intercept("https://www.makemytrip.com/","https://www.goibibo.com/");
        await intercept("https://maps.gstatic.com/mapfiles/api-3/images/google4_hdpi.png","https://<postman-mock-url>/<dummy-png>");
        //example
        //await intercept("https://maps.gstatic.com/mapfiles/api-3/images/google4_hdpi.png","https://db41e9af-e5c5-4a2b-a70b-8152c7c463f1.mock.pstmn.io/girrafe.png");
        await goto("https://maps.gstatic.com/mapfiles/api-3/images/google4_hdpi.png");
    } catch (e) {
        console.error(e);
    } finally {
        await closeBrowser();
    }
})();
