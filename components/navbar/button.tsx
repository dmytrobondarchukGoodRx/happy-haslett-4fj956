import React, { PropsWithChildren } from "react";

export const Button: React.FC<PropsWithChildren> = (props) => (
    <button className="rounded-full text-[#0F56A6] px-4 py-2 border border-[#0F56A6] w-fit">{props.children}</button>
)