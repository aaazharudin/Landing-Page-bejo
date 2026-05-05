"use client";

import { useEffect, useState } from "react";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function WAButtonClient() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <WhatsAppButton />;
}
