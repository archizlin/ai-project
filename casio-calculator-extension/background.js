chrome.action.onClicked.addListener(async tab => {
  if (tab.id) chrome.tabs.sendMessage(tab.id, {type: 'toggle-calculator'}).catch(() => {});
});
chrome.commands.onCommand.addListener(async command => {
  if (command !== 'toggle-calculator') return;
  const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
  if (tab?.id) chrome.tabs.sendMessage(tab.id, {type: 'toggle-calculator'}).catch(() => {});
});
