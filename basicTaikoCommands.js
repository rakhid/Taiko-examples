const { openBrowser, goto, write, click, $, closeBrowser } = require('taiko','minimist');
const args = process.argv;
(async () => {
    try {
        await openBrowser();
        await goto("Gmail.com");
        await write(args[3]);
        await press("Enter");
        await write(args[4]);
        await press("Enter");
        await click("Compose");
        await click($("//*[contains(@name,'subjectbox')]"));
        await write("I will be working from home today<EOM>");
        await click($("//div[text()='Recipients']"));
        await write(args[5]);
        await click(args[5]);
        await click("Send");
        alert('Message sent.', async () => await dismiss())      
    } catch (e) {
        console.error(e);
    } finally {
        await closeBrowser();
    }
})();
