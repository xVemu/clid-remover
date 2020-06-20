`use stict`;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    let url;
    if (tab.url.match(/\?fbclid=.*?&/g)) url = tab.url.replace(/fbclid.*?&/g, '');
    else if (tab.url.match(/\?fbclid=.*/g)) url = tab.url.replace(/\?fbclid.*/g, '');
    else if (tab.url.match(/&fbclid=.*?&/g)) url = tab.url.replace(/&fbclid.*?&/g, '');
    else if (tab.url.match(/&fbclid=.*/g)) url = tab.url.replace(/&fbclid.*/g, '');
    else return;
    chrome.tabs.update(tab.id, { url: url });
});