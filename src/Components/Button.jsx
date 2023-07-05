import React from 'react'
import { Link } from 'react-router-dom';

function Button({ children, icon, variant, type, to }) {

    const outlineGoldButton = `rounded transition border-gold-400 border-2 text-gold-400 hover:bg-gold-400 hover:text-white mt-3 px-5 py-3 uppercase font-semibold tracking-wide`;

    const solidGoldButton = `rounded transition bg-gold-400 hover:opacity-70 mt-3 px-5 py-3 uppercase font-semibold tracking-wide text-white`;

    return (
        type === 'link' ? (
            icon ? (
                <Link to={to} className={` ${variant === 'outline' ? outlineGoldButton : solidGoldButton
                    } flex gap - 2 text - center items - center select - none`}>
                    <span>{children}</span>
                    {icon}
                </Link>
            )
                : (
                    <Link to={to} className={`${variant === 'outline' ? outlineGoldButton : solidGoldButton} select - none`}>
                        {children}
                    </Link>
                )
        ) : (
            icon ? (
                <button type={type === 'submit' ? 'submit' : 'button'} className={` ${variant === 'outline' ? outlineGoldButton : solidGoldButton} flex gap - 2 text - center items - center select - none`}>
                    <span>{children}</span>
                    {icon}
                </button>
            )
                : (
                    <button type={type === 'submit' ? 'submit' : 'button'} className={`${variant === 'outline' ? outlineGoldButton : solidGoldButton} select - none`}>
                        {children}
                    </button>
                )
        )

    )
}

export default Button