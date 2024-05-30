import clsx from "clsx";
import React from "react";
import { BigX, HcpIcon, SmallFaqButton, SmallGoldIcon, SmallHealthIcon, SmallHomeButton, SmallPrescriptionsIcon, SmallTelehealthIcon, SmallX } from "./images";
import { SidebarMenuItem } from "./sidebarMenuItem";

export const Sidebar: React.FC<{ isOpen: boolean, close: () => void }> = (props) => {
    return (
        <>
            {props.isOpen && <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-10" onClick={props.close}></div>}
            <div className={clsx("bg-white transition-all w-[422px] fixed top-0  bottom-0 flex flex-col gap-3 z-20 p-5", props.isOpen ? "right-0" : "-right-full")}>
                <div className="flex flex-row justify-between">
                    <div className="text-3xl font-medium">Welcome to GoodRx</div>
                    <button onClick={props.close} className="bg-transparent border-none"><BigX /></button>
                </div>
                <div className="flex flex-row gap-4 justify-between">
                    <button className="text-white border border-[#0F56A6] py-3 px-3 bg-[#0F56A6] font-medium text-sm rounded-full w-full text-center">
                        Sign up for free
                    </button>
                    <button className="bg-white border border-[#0F56A6] py-3 px-3 text-[#0F56A6] font-medium text-sm rounded-full w-full text-center">
                        Sign in
                    </button>
                </div>
                <div className="flex flex-row justify-between bg-[#E6F2FC] p-3 rounded-md items-center">
                    <div className="flex flex-row gap-2 items-center">
                        <HcpIcon />
                        <span className="text-[#0F56A6]">Try GoodRx for healthcare professionals</span>
                    </div>
                    <SmallX />
                </div>
                <div className="flex flex-col w-full">
                    <SidebarMenuItem icon={<SmallHomeButton />}>Home</SidebarMenuItem>
                    <SidebarMenuItem icon={<SmallPrescriptionsIcon />} hasSubMenu>Prescriptions</SidebarMenuItem>
                    <SidebarMenuItem icon={<SmallTelehealthIcon />} hasSubMenu>Telehealth</SidebarMenuItem>
                    <SidebarMenuItem icon={<SmallHealthIcon />} hasSubMenu>Health</SidebarMenuItem>
                    <SidebarMenuItem icon={<SmallGoldIcon />} hasSubMenu>Gold</SidebarMenuItem>
                    <hr className="my-1" />
                    <SidebarMenuItem>How GoodRx works</SidebarMenuItem>
                    <SidebarMenuItem>Pharmacies near you</SidebarMenuItem>
                    <SidebarMenuItem>Health conditions</SidebarMenuItem>
                    <SidebarMenuItem>Get a prescription savings card</SidebarMenuItem>
                    <SidebarMenuItem>Get the GoodRx app</SidebarMenuItem>
                    <hr className="my-1" />
                    <SidebarMenuItem icon={<SmallFaqButton />}>Help and FAQs</SidebarMenuItem>
                </div>
            </div>
        </>

    )
}