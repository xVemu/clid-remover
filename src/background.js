'use strict'

chrome.tabs.onUpdated.addListener((_tabId, _changeInfo, tab) => {
    if (tab.url.match(new RegExp('[?&](gclid|fbclid)=(.*?&|.*)', 'g')))
        chrome.tabs.update(tab.id,
            { url: tab.url.replace(new RegExp('(gclid|fbclid)=(.*?&|.*)', 'g'), '') })
})