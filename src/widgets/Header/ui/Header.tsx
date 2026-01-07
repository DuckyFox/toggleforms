import React from 'react';
import {AuthButtons} from "@/widgets/AuthButtons";

const Header = () => {
    return (
        <header className='flex justify-between p-4 items-center'>
            <h1
                className='text-primary text-xl'
            >TOOGLE FORMS</h1>
            <AuthButtons/>
        </header>
    );
};

export default Header;