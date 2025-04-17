import { useAppDispatch, useAppSelector } from "@/store/store.ts";
import { useEffect } from "react";
import { subscribeNotificationAction } from "@/store/auth/actions/subscribeNotification/subscribeNotification.action.ts";

export function useAppRouter() {
  const isLogin = useAppSelector((state) => state.auth.token.status === "success");
  const dispatch = useAppDispatch();
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("SW registered:", registration);
            registration.onupdatefound = () => {
              const installingWorker = registration.installing;
              installingWorker!.onstatechange = () => {
                if (installingWorker!.state === "installed") {
                  if (navigator.serviceWorker.controller) {
                    console.log("New content available; please refresh.");
                  } else {
                    console.log("Content is cached for offline use.");
                  }
                }
              };
            };
          })
          .catch((error) => {
            console.log("SW registration failed:", error);
          });
      });
    }
    dispatch(subscribeNotificationAction(undefined));
  }, [dispatch]);

  return { isLogin };
}
