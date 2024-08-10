"use client";
import { LocationStateProvider } from "@location-state/core";

export function Provider({ children }: { children: React.ReactNode }) {
  return <LocationStateProvider>{children}</LocationStateProvider>;
}