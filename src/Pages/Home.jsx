import React from 'react'
import Banner from '../Components/Banner'
import banner from '../assets/banner-bg.png'
import Button from '../Components/Button'
import Title from '../Components/Title'
import ServicesSection from '../Components/sections/ServicesSection'

function Home() {
    return (
        <main className=''>
            <Banner bg={banner}>
                <div className="container flex h-[calc(70vh)] items-center">
                    <div className='md:max-w-2xl '>
                        <Title
                            subtitle={'Hanover Advocacia: Seu Parceiro Jurídico de Confiança'}
                            title={'Soluções jurídicas especializadas para empresas e indivíduos'}
                        />
                        <Button bg='border-gold-400 border-2 text-gold-400 hover:bg-gold-400 hover:text-white mt-3'>Entre em contato</Button>
                    </div>
                </div>
            </Banner>
            <ServicesSection></ServicesSection>
        </main>
    )
}

export default Home