import React from 'react';
import {HeaderContent} from "@/widgets/HeaderContent";


const Header = () => {

    return (
        <header className='flex justify-between p-4 items-center'>
            <h1
                className='text-primary text-xl'
            >TOOGLE FORMS</h1>
            <HeaderContent />
        </header>
    );
};

export default Header;