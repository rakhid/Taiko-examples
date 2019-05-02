const { openBrowser, goto, scrollDown, click, listItem, comboBox, write, focus, $, to, attach, closeBrowser } = require('taiko');
(async () => {
    try {
	openBrowser;
        await openBrowser({args:['--window-size=1440,1200']});
        await goto("http://automationpractice.com/index.php");
        await click("Contact us");
        await comboBox('Subject Heading').select('Webmaster');
        await click("Email address");
        await write("abc@gmail.com");
        await click($(`#id_order`));
        await write("#123987");
        await click("Attach File");
        await attach("<pathtojpegfile>.jpg",to("Attach File"));
        await click("Message");
        await write("Hope you resolve my issue");
        alert('Your message has been successfully sent to our team.', async () => await display())      
        await click("Send");
    } catch (e) {
        console.error(e);
    } finally {
        await closeBrowser();
    }
})();
