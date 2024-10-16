'use client';

import Link from "next/link";
import type { NavItem } from "@/types"
import { useMobileMenu } from "@/hooks/useMobileMenu";

type MobileNavMenuProps = {
    items: Readonly<NavItem[]>
}
export default function MobileNavMenu({items}: MobileNavMenuProps) {

    const {setFalse} = useMobileMenu()

    return (
        <div className='fixed inset-0 z-40 top-0 h-screen px-6 py-24 overflow-auto bg-background/80 backdrop-blur-lg shadow-md animate-in slide-in-from-bottom-80 sm:hidden'>
            <ul className='flex flex-col gap-5'>
                {
                    items.map(item=>{
                        return (
                            <li key={item.label}>
                                <Link href={item.href} onClick={setFalse} className='text-foreground/70 hover:text-foreground font-medium'>{item.label}</Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}