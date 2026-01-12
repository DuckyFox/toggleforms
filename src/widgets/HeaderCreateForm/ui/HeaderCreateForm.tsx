import React from 'react';
import {HeaderCreateFormContent} from "@/widgets/HeaderCreateFormContent";


const HeaderCreateForm = () => {
    return (
        <header className='flex justify-between p-4 items-center'>
            <h1
                className='text-primary text-xl'
            >TOOGLE FORMS</h1>
            <HeaderCreateFormContent />
        </header>
    );
};

export default HeaderCreateForm;