chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const isNotificationAllowed = true;
  if (isNotificationAllowed) sendResponse('yes');
});
