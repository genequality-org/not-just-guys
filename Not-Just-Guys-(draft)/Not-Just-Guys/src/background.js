var gaService = analytics.getService('NotJustGuys');

chrome.runtime.onInstalled.addListener(function() {
  var tracker = gaService.getTracker('UA-133174705-1'); // prod
  var timing = tracker.startTiming('Analytics Performance', 'Send Event');
  tracker.sendAppView('View');
  timing.send();

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'mail.google.com' },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'inbox.google.com' },
          })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

chrome.pageAction.onClicked.addListener(function() {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else { // fallback to old way
    window.open(chrome.runtime.getURL('options.html'));
  }
});
