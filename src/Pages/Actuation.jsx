import React from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../Components/Banner'
import banner from '../assets/banner-bg-empresa.png'

function Actuation() {
    const { actuation } = useParams()

    return (
        <Banner bg={banner}>
            <div>
                {
                    actuation
                }
            </div>
        </Banner>
    )
}

export default Actuation