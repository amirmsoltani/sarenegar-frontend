import { useState } from "react";

export function useDashboard() {
  const [event, setEvent] = useState<any | null>(null);

  // useEffect(() => {
  //   const eventListener = (e: Event) => {
  //     setEvent(e);
  //   };
  //
  //   window.addEventListener("beforeinstallprompt", eventListener);
  //
  //   return () => {
  //     window.removeEventListener("beforeinstallprompt", eventListener);
  //   };
  // }, []);

  async function installHandler() {
    event!.prompt();
    const { outcome } = await event!.userChoice;
    if (outcome === "accepted") {
      setEvent(null);
    }
  }

  return { installHandler, showInstallCard: !!event };
}
