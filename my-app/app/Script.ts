"use client";

import { useEffect } from "react";

export default function SWScript() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("Service Worker registered: ", registration);
          })
          .catch((registrationError) => {
            console.error(
              "Service Worker registration failed: ",
              registrationError
            );
          });
      });
    }
  }, []);
  return null;
}
