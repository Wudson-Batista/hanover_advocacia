import React from 'react'

function FormInput({ label, inputType, isRequired }) {
    return (

        inputType === 'textarea' ? (

            <div className="relative">
                <textarea type={inputType} id={`floating_${label}`} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border border-blue-grey-300/80 appearance-none  focus:outline-none focus:ring-0 focus:border-gold-400 peer resize-none" placeholder=" " required={isRequired} ></textarea>

                <label htmlFor={`floating_${label}`} className="absolute text-md text-blue-grey-300 duration-300 transform -translate-y-6 scale-75 top-2 z-10 bg-about origin-[0] cursor-text px-2 peer-focus:px-2 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/4 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1">{label} {isRequired ? '*' : ''}</label>
            </div>
        )
            : (
                <div className="relative">
                    <input type={inputType} id={`floating_${label}`} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-transparent rounded-lg border border-blue-grey-300/80 appearance-none  focus:outline-none focus:ring-0 focus:border-gold-400 peer" placeholder=" " required={isRequired} />

                    <label htmlFor={`floating_${label}`} className="absolute text-md text-blue-grey-300 duration-300 transform -translate-y-6 scale-75 top-2 z-10 bg-about origin-[0] cursor-text px-2 peer-focus:px-2 peer-focus:text-white  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1">{label} {isRequired ? '*' : ''}</label>
                </div>
            )


    )
}

export default FormInput