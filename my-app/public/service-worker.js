self.addEventListener("push", (event) => {
  const message = "Hello World! from Notification.";

  event.waitUntil(
    self.registration.showNotification("Notification", {
      body: message,
      icon: "/icons/android-launchericon-192-192.png",
    })
  );
});
