import React from "react";
import { SmallLeftChevronButton } from "./images";

export const SidebarMenuItem: React.FC<{ icon?: React.ReactNode, children: React.ReactNode, hasSubMenu?: boolean }> = (props) =>
(
    <button className="bg-transparent border-none py-2 px-3 flex flex-row  items-center justify-between text-[#575757] font-medium">
        <span className="flex flex-row gap-3  items-center">
            {props.icon}
            <span>{props.children}</span>
        </span>
        {props.hasSubMenu && <SmallLeftChevronButton />}
    </button>
)