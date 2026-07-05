"use client";

import Link from "next/link";
import { sendGAEvent } from "@next/third-parties/google";

type TrackedLinkProps = React.ComponentProps<typeof Link> & {
  eventName: string;
  eventCategory?: string;
};

export function TrackedLink({ eventName, eventCategory = "CTA", onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        sendGAEvent({ event: eventName, category: eventCategory, label: props.href.toString() });
        if (onClick) onClick(e);
      }}
    />
  );
}
