chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "sixDigitNumber_normal",
    title: "Going to wnacg with this number",
    contexts: ["selection"],
  });
  chrome.contextMenus.create({
    id: "sixDigitNumber_private",
    title: "Going to wnacg with this number (Private Browsing)",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(function getword(info, tab) {
  if (info.menuItemId !== "sixDigitNumber_normal") {
    return;
  }
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({
    url: "www.wnacg.com/photos-index-aid-" + info.selectionText,
  });
});

chrome.contextMenus.onClicked.addListener(function getword(info, tab) {
  if (info.menuItemId !== "sixDigitNumber_private") {
    return;
  }
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.windows.create({
    url: "www.wnacg.com/photos-index-aid-" + info.selectionText,
    incognito: true,
  });
});

