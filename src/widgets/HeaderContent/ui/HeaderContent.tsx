'use client'

import {usePathname} from "next/navigation";
import React from 'react';
import {CreateNewFormButton} from "@/widgets/CreateNewFormButton";
import {AuthButtons} from "@/widgets/AuthButtons";
import Link from "next/link";

const HeaderContent = () => {

    const pathname = usePathname();
    const isMain = pathname === '/'
    const isCreateForm = pathname === '/createForm'

    return (
        <div>
            {isMain
                ?<div className='flex items-center gap-x-14'>
                    <CreateNewFormButton/>
                    <AuthButtons/>
                 </div>
                : <></>
            }
            {isCreateForm
                ? <Link
                    className='
                        box-border border border-solid border-primary rounded-xl
                        hover:text-primary-foreground hover:border-foreground hover:bg-foreground transition
                        flex items-center gap-x-1 px-4 py-2
                        text-primary text-lg

                    '
                    href='/'
                >
                    Back To Forms
                </Link>
                : <></>
            }
        </div>
    );
};

export default HeaderContent;