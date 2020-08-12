const CronJob = require('cron').CronJob;

// A cron running every new minutes to see if we need to change notifications display options
const cronJob = new CronJob('0 * * * * *', () => {
  console.log('Cheking pulse');
  chrome.runtime.sendMessage(
    'should I change rights?',
    ({ isNotificationAllowed }) => {
      const event = new CustomEvent('ChangeRights', {
        detail: { isNotificationAllowed },
      });
      window.dispatchEvent(event);
    }
  );
});

cronJob.start();

(function() {
  const script = () => {
    // When triggered change notification object to display/hide
    window.addEventListener('ChangeRights', function(event) {
      const OldNotify = window.Notification;
      const { isNotificationAllowed } = event.detail;

      const newNotify = (title, opt) => {
        if (!isNotificationAllowed) return null;
        return new OldNotify(title, opt);
      };

      window.Notification = newNotify;
    });
  };

  // Inject script on the page so when we can manipulate window.Notification
  const inject = (fn) => {
    const script = document.createElement('script');
    script.text = `(${fn.toString()})();`;
    document.documentElement.appendChild(script);
  };

  inject(script);
})();
