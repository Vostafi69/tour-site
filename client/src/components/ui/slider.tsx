"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    defaultValue={[25, 75]}
    minStepsBetweenThumbs={1}
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-[#7C7C7C]">
      <SliderPrimitive.Range className="absolute h-full bg-[#6FD0D2]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="relative block h-5 w-5 rounded-full border border-[#7C7C7C] bg-background shadow transition-colors after:absolute after:inset-1 after:rounded-full after:bg-[#6FD0D2] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
    <SliderPrimitive.Thumb className="relative block h-5 w-5 rounded-full border border-[#7C7C7C] bg-background shadow transition-colors after:absolute after:inset-1 after:rounded-full after:bg-[#6FD0D2] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
