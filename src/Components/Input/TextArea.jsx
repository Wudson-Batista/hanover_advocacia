import React from 'react'
import { useFormContext } from 'react-hook-form'

function TextArea({ field }) {
    const {
        register,
        formState: { errors }
    } = useFormContext()


    return (
        <textarea
            id={`floating_${field}`}
            placeholder=''
            className={`h-[120px] block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border appearance-none  focus:outline-none focus:ring-0 peer resize-none ${errors?.[field] ? 'border-red-500 focus:border-red-500' : 'border-blue-grey-300/80 focus:border-gold-400'}`}
            {...register(field)}></textarea>
    )
}

export default TextArea