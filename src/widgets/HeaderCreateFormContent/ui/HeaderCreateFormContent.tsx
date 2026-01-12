'use client'

import React from 'react';
import Link from "next/link";

const HeaderCreateFormContent = () => {
    return (
        <Link
            className='box-border border border-solid border-primary rounded-xl hover:text-primary-foreground hover:border-foreground hover:bg-foreground transition flex items-center gap-x-1 px-4 py-2 text-primary text-lg'
            href='/'
        >
            Back To Forms
        </Link>
    );
};

export default HeaderCreateFormContent;