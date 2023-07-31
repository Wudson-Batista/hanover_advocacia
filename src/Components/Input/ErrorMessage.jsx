import React from 'react'
import { useForm, useFormContext } from 'react-hook-form'

function ErrorMessage({ field }) {

    const {
        formState: { errors }
    } = useFormContext()

    return (
        errors?.name && <span className='text-red-500 text-sm '>*{errors?.[field].message}</span>
    )
}

export default ErrorMessage