import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { clsx } from "clsx";
import React from "react";

export type NavigationMenuProps = {
  items: string[];
  children: React.ReactNode[]
};

const preventHover = (event: any) => {
  const e = event as Event
  //e.preventDefault()
}

export const NavigationMenu = (props: NavigationMenuProps) => {
  return (
    <NavigationMenuPrimitive.Root className="">
      <NavigationMenuPrimitive.List className="flex flex-row space-x-2 justify-around">
        {props.items.map((item, index) => (
          <NavigationMenuPrimitive.Item className="">
            <NavigationMenuPrimitive.Trigger
              onPointerMove={preventHover}
              onPointerLeave={preventHover}
              className={clsx(
                "px-4 py-6 text-lg border-b-2 border-b-transparent transition-all hover:border-b-[#B7B7B7] focus-visible:border-b-[#B7B7B7] data-[state=open]:border-b-[#B7B7B7]",
                "text-sm font-medium",
                "text-[#575757]-500",
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
              )}
            >
              {item}
            </NavigationMenuPrimitive.Trigger>

            <NavigationMenuPrimitive.Content
              onPointerMove={preventHover}
              onPointerLeave={preventHover}
              className={clsx(
                "radix-motion-from-start:animate-enter-from-left",
                "radix-motion-from-end:animate-enter-from-right",
                "radix-motion-to-start:animate-exit-to-left",
                "radix-motion-to-end:animate-exit-to-right",
                "data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full"
              )}
            >
              <div className="w-[75%] mx-auto py-8">
                {props.children[index]}
              </div>
            </NavigationMenuPrimitive.Content>
          </NavigationMenuPrimitive.Item>
        ))}
      </NavigationMenuPrimitive.List>

      <div
        className={clsx(
          "absolute flex justify-center",
          "w-full left-0 top-full right-0",
        )}
        style={{
          perspective: "2000px",
        }}
      >
        <NavigationMenuPrimitive.Viewport
          className={clsx(
            "relative w-full mt-[0px] shadow-lg  bg-white  overflow-hidden",
            "radix-state-open:animate-scale-in-content",
            "radix-state-closed:animate-scale-out-content",
            "h-[var(--radix-navigation-menu-viewport-height)]",
            "transition-[width_height] duration-300 ease-[ease]",
          )}
        />
      </div>
    </NavigationMenuPrimitive.Root>
  );
};

