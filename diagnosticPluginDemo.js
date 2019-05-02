const { openBrowser, goto, loadPlugin, closeBrowser } = require('taiko');
const {ID, clientHandler, startTracing, endTracing, getTracingLogs, getPerformanceMetrics } = require('taiko-diagnostics');
loadPlugin(ID, clientHandler);
(async () => {
    try {
        await openBrowser();
        await startTracing();
        await goto("https://www.youtube.com");
        await endTracing();
        await getTracingLogs();
        await getPerformanceMetrics();
    } catch (e) {
        console.error(e);
    } finally {
        await closeBrowser();
    }
})();
