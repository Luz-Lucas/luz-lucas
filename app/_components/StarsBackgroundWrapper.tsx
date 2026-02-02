"use client";

import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import type { ReactNode } from "react";

type StarsBackgroundWrapperProps = {
  children: ReactNode;
};

export function StarsBackgroundWrapper({ children }: StarsBackgroundWrapperProps) {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <GravityStarsBackground
        className="absolute inset-0"
        starsOpacity={0.35}
        starsCount={140}
        starsSize={2}
        glowIntensity={14}
        mouseInfluence={180}
        gravityStrength={140}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}