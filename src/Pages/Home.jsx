import React from 'react'
import Banner from '../Components/Banner'
import banner from '../assets/banner-bg.png'
import Button from '../Components/Button'

function Home() {
    return (
        <div className=''>
            <Banner bg={banner}>
                <div className='max-w-2xl uppercase absolute top-32'>
                    <h3 className="subtitle font-serif text-md text-gold-400 mb-1">Hanover Advocacia: Seu Parceiro Jurídico de Confiança</h3>
                    <h1 className="title font-semibold text-3xl">Soluções jurídicas especializadas para empresas e indivíduos</h1>
                    <Button bg='border-gold-400 border-2 text-gold-400 hover:bg-gold-400 hover:text-white mt-3'>Entre em contato</Button>
                </div>
            </Banner>
        </div>
    )
}

export default Home