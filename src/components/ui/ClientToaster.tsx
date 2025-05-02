"use client";

import { Toaster } from "react-hot-toast";

export function ClientToaster() {
  return (
    <Toaster
      toastOptions={{
        success: {
          style: {
            background: "#D1FAE5",
            color: "#065F46",
          },
        },
        error: {
          style: {
            background: "#FEE2E2",
            color: "#991B1B",
          },
        },
      }}
    />
  );
}
