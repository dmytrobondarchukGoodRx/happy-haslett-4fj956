import React from "react"
import { HamburgerIcon, HcpIcon, SearchIcon } from "./images"
import { NavMenu } from "./navmenu"
import { Sidebar } from "./sidebar";

export const Navbar: React.FC = () => {
    const [isSearch, setIsSearch] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
        <div className="relative">
            <div className="w-full bg-white border-b-[#B7B7B7] border-b flex flex-row justify-between pl-6 pr-3">
                {isSearch ?
                    <>
                        <div className="self-center flex-1">
                            <img className="px-2 py-2" src="https://images.ctfassets.net/4f3rgqwzdznj/69gWpZPltpARadZPdhvjpr/df0bc54461dc86b2834407875d449dca/GoodRx_logo.svg" />
                        </div>
                        <div className="flex flex-row gap-2 flex-1">
                            <input type="text" placeholder="🔎 Search for a medication, class, or condition" className="border-[3px] rounded-lg focus:border-[#1D74DE] active:border-[#1D74DE] w-full h-12 my-3.5" />
                            <button className="bg-transparent border-none py-3 px-3 text-[#201F1B] font-medium text-sm flex flex-row gap-4 items-center" onClick={() => setIsSearch(!isSearch)}>
                                Cancel
                            </button>
                        </div>
                        <div className="flex items-center flex-1 place-content-end">
                            <button className="bg-transparent border-none py-3 px-3  font-medium text-sm flex flex-row gap-4 items-center" onClick={() => setIsMenuOpen(true)}>
                                <HamburgerIcon />
                            </button>
                        </div>
                    </> : <>
                        <div className="flex flex-row">
                            <div className="self-center">
                                <img className="px-2 py-2" src="https://images.ctfassets.net/4f3rgqwzdznj/69gWpZPltpARadZPdhvjpr/df0bc54461dc86b2834407875d449dca/GoodRx_logo.svg" />
                            </div>
                            <NavMenu />
                        </div>
                        <div className="flex flex-row place-content-end gap-3">
                            <div className="flex items-center">
                                <button className="bg-transparent border-none py-3 px-3 text-[#201F1B] font-medium text-sm flex flex-row gap-4 items-center" onClick={() => setIsSearch(!isSearch)}>
                                    <SearchIcon /> Search
                                </button>
                            </div>
                            <div className="flex items-center">
                                <button className="bg-[#F7F7F4] border-none py-3 px-3 text-[#201F1B] font-medium text-sm flex flex-row gap-4 items-center rounded-full">
                                    <HcpIcon /> For healthcare professionals
                                </button>
                            </div>
                            <div className="flex items-center">
                                <button className="bg-white border border-[#0F56A6] py-3 px-3 text-[#0F56A6] font-medium text-sm flex flex-row gap-4 items-center rounded-full">
                                    Sign up / Sign in
                                </button>
                            </div>
                            <div className="flex items-center">
                                <button className="bg-transparent border-none py-3 px-3  font-medium text-sm flex flex-row gap-4 items-center" onClick={() => setIsMenuOpen(true)}>
                                    <HamburgerIcon />
                                </button>
                            </div>
                        </div>
                    </>
                }
            </div>
            <Sidebar isOpen={isMenuOpen} close={() => setIsMenuOpen(false)} />
        </div>
    )
}