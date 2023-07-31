import React from 'react'
import { useFormContext } from 'react-hook-form'

function FormInput({ field }) {

    const {
        register,
        formState: { errors }
    } = useFormContext()

    return (
        <input
            placeholder=''
            id={`floating_${field}`}
            type='text'
            {...register(field)}
            className={
                `block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border appearance-none  focus:outline-none focus:ring-0 peer ${errors?.[field] ? 'border-red-500 focus:border-red-500' : 'border-blue-grey-300/80 focus:border-gold-400'}`
            } />
    )
}

export default FormInput