'use client'

import React from 'react';
import {z} from 'zod';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/shared/ui";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/shared/ui/form";
import {Input} from "@/shared/ui/input";

const formHeadSchema = z.object({
    title: z.string().min(3,{
        message: "Title must be at least 3 characters."
    }).max(100,{
        message: "Title cannot be longer than 100 characters."
    }),
    description: z.string().min(3,{
        message: "Description must be at least 3 characters."
    }).max(255,{
        message: "Description cannot be longer than 255 characters."
    }).optional(),
})

type FormHeadFormType = z.infer<typeof formHeadSchema>;

const FormHeadForm = () => {

    const form = useForm<FormHeadFormType>({
        resolver: zodResolver(formHeadSchema),
        defaultValues: {
            title: 'New Form',
            description: undefined
        }
    })

    function onSubmit(values: FormHeadFormType) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-1/2  m-auto gap-y-2 flex flex-col'>
                <FormField
                    control={form.control}
                    name="title"
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder='Title' {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder='Description' {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
};

export default FormHeadForm;