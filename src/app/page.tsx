"use client";

import * as React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { PanelFrame } from "@/components/ui/PanelFrame";
import { Badge } from "@/components/ui/Badge";
import { ContentContainer } from "@/components/layout/Containers";

/**
 * Root route placeholder.
 * Phase 2 will implement the dashboard and routing.
 * This page intentionally renders the reusable shell only, with a minimal
 * placeholder frame that uses the same visual language.
 */
export default function HomePage() {
  return (
    <DashboardLayout>
      <PanelFrame variant="hero" bracket="indigo" bracketSize="lg" withDots>
        <ContentContainer className="flex min-h-[60vh] flex-col items-start justify-center gap-6">
          <Badge variant="accent" withDot pulse>
            Console ready
          </Badge>
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium uppercase tracking-[0.32em] text-neutral-500 font-sans">
              Foundation complete
            </p>
            <h1 className="font-bebas-neue text-5xl leading-[1.1] tracking-tighter text-white sm:text-6xl lg:text-7xl">
              Industrial Operating
              <br />
              <span className="accent-text">Brain</span> console.
            </h1>
            <p className="max-w-xl text-sm leading-6 text-neutral-400 sm:text-base font-sans">
              Frontend foundation is initialized. Pages, routing, authentication
              and business logic will be wired in subsequent phases.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6 text-xs font-sans uppercase tracking-widest text-zinc-500 sm:grid-cols-4">
            <div>
              <span className="block">Phase</span>
              <strong className="mt-1 block font-medium text-zinc-200">01</strong>
            </div>
            <div>
              <span className="block">Status</span>
              <strong className="mt-1 block font-medium text-zinc-200">Foundation</strong>
            </div>
            <div>
              <span className="block">Tokens</span>
              <strong className="mt-1 block font-medium text-zinc-200">Locked</strong>
            </div>
            <div>
              <span className="block">Next</span>
              <strong className="mt-1 block font-medium text-zinc-200">Routing</strong>
            </div>
          </div>
        </ContentContainer>
      </PanelFrame>
    </DashboardLayout>
  );
}
