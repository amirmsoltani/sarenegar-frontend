import { useCallback } from "react";
// components
import { YesOrNoModal } from "@/common/YesOrNoModal/YesOrNoModal";

export const DeleteModal = () => {
  const onSubmit = useCallback(async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(""), 5000);
    });
  }, []);

  return (
    <YesOrNoModal
      onSubmit={onSubmit}
      rejectText="keep it"
      title="Cancel booking?"
      acceptText="Cancel booking"
      description="Once cancelled, participants will be informed by email and notification to their Playtomic app. Booking will be removed from the schedule but can still be found in the Bookings section."
    />
  );
};
