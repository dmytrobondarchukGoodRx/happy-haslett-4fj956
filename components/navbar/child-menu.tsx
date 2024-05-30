import React from "react";
import { clsx } from "clsx";

export const ChildMenu: React.FC<{ title: string, links: { text: React.ReactNode, href: string; isPrimary?: boolean }[] }> = (props) => (
    <div className="flex flex-col gap-2">
        <h3 className="text-[rgb(32,31,27)] font-bold">{props.title}</h3>
        <ul className="list-none p-0 flex flex-col gap-2">
            {props.links.map(x => (
                <li key={x.href}><a href={x.href} className={clsx("hover:no-underline text-[#575757] font-medium", x.isPrimary ? "text-[#0F56A6]" : "text-[#575757]")}>{x.text}</a></li>
            ))}
        </ul>
    </div>
)