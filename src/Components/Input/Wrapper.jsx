import React from 'react'

function Wrapper({ children }) {
    return (
        <div className="relative">
            {children}
        </div>
    )
}

export default Wrapper