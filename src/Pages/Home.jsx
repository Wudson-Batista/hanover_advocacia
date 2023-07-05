import React from 'react'
import Banner from '../Components/Banner'
import banner from '../assets/banner-bg.png'
import Button from '../Components/Button'
import Title from '../Components/Title'
import { ServicesSection } from '../Components/sections/ServicesSection'
import AboutSection from '../Components/sections/AboutSection'
import ContactSection from '../Components/sections/ContactSection'
import Footer from '../Components/sections/Footer'

function Home() {
    return (
        <main className='' id='home'>
            <Banner bg={banner} overlay={true}>
                <div className='md:max-w-2xl mt-24'>
                    <Title
                        subtitle={'Hanover Advocacia: Seu Parceiro Jurídico de Confiança'}
                        title={'Soluções jurídicas especializadas para empresas e indivíduos'}
                    />
                    <Button variant='outline' >Entre em contato</Button>
                </div>
            </Banner>
            <ServicesSection></ServicesSection>
            <AboutSection></AboutSection>
            <ContactSection></ContactSection>
        </main>
    )
}

export default Home