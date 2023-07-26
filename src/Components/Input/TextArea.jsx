import React from 'react'
import { useFormContext } from 'react-hook-form'

function TextArea({ field }) {
    const {
        register,
    } = useFormContext()


    return (
        <textarea
            id={`floating_${field}`}
            placeholder=''
            className="h-[120px] block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border border-blue-grey-300/80 appearance-none  focus:outline-none focus:ring-0 focus:border-gold-400 peer resize-none"
            {...register(field)}></textarea>
    )
}

export default TextArea