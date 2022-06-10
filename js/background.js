// user settings
let userSettings = {
  "enabled": true,
}

// First, initialization of the plugin
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ userSettings })
})

// Second, show image on the page when the page is loaded
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!userSettings.enabled) {
    return
  }

  if (changeInfo.status !== 'complete') {
    return
  }

  chrome.scripting.executeScript({
    target: { tabId: tabId, allFrames: true },
    files: ['js/algorithm.js'],
  })
})

// update the user settings
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

  if ('enabled' in request) {
    userSettings.enabled = request.enabled
    chrome.storage.sync.set({ userSettings })
  }

  return true
})
