import React from 'react'

function Button({ children, icon }) {

    const outlineGoldButton = `rounded transition border-gold-400 border-2 text-gold-400 hover:bg-gold-400 hover:text-white mt-3 px-4 py-2 uppercase font-semibold tracking-wide`;

    return (
        icon ? (
            <button className={` ${outlineGoldButton} flex gap-2 text-center items-center`}>
                <span>{children}</span>
                {icon}
            </button>
        )
            : (
                <button className={outlineGoldButton}>
                    {children}
                </button>
            )
    )
}

export default Button