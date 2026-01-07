import React from 'react';
import Link from 'next/link';

const AuthButtons = () => {
    return (
        <nav className='flex items-center gap-x-4'>
            <Link
                className='
                    box-border transition
                    hover:opacity-70
                    text-primary
                    '
                href="/"
            >
                Sign In
            </Link>
            <Link
                className='
                    box-border border border-solid border-primary rounded-xl
                    px-4 py-2
                    text-primary
                    hover:text-primary-foreground hover:border-foreground hover:bg-foreground transition
                    '
                href="/"
            >
                Sign Up
            </Link>
        </nav>
    );
};

export default AuthButtons;