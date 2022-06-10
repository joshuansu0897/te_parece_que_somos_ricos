//Initializations on Startup
const enabled_Switch = document.getElementById('enabled')
let userSettingsCopy

chrome.storage.sync.get('userSettings', (result) => {
  userSettingsCopy = result.userSettings
  enabled_Switch.checked = userSettingsCopy.enabled
})

//Events
enabled_Switch.addEventListener('change', function () {
  let Enabled_Status = enabled_Switch.checked
  chrome.runtime.sendMessage({ enabled: Enabled_Status })
})
