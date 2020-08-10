(function() {
  const script = () => {
    const OldNotify = window.Notification;
    const newNotify = (title, opt) => {
      console.log('Notification incoming');
      return new OldNotify(title, opt);
    };
    window.Notification = newNotify;
  };

  const inject = (fn) => {
    const script = document.createElement('script');
    script.text = `(${fn.toString()})();`;
    document.documentElement.appendChild(script);
  };

  inject(script);
})();
