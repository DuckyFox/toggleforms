import React from 'react';
import Link from "next/link";
import {PlusIcon} from "lucide-react";

const CreateNewFormButton = () => {
    return (
        <Link
            className='
                flex items-center gap-x-1 px-4 py-2 transition
                border-solid border border-chart-3 rounded-xl
                hover:border-chart-4
                text-chart-3
                hover:text-chart-4
            '
            href='/createForm'
        >
            <PlusIcon />
            <h2 className='text-lg'>Create New Form</h2>
        </Link>
    );
};

export default CreateNewFormButton;
