'use client'

import React from 'react';
import {CreateNewFormButton} from "@/widgets/CreateNewFormButton";
import {AuthButtons} from "@/widgets/AuthButtons";


const HeaderContent = () => {
    return (
        <div className='flex items-center gap-x-14'>
            <CreateNewFormButton/>
            <AuthButtons/>
        </div>
    );
};

export default HeaderContent;