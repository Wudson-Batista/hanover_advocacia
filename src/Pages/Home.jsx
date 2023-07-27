import React from 'react'
import Banner from '../Components/Banner'
import banner from '../assets/banner-bg.png'
import Button from '../Components/Button'
import { ServicesSection } from '../Components/sections/ServicesSection'
import AboutSection from '../Components/sections/AboutSection'
import ContactSection from '../Components/sections/ContactSection'
import { Title } from '../Components/Title/Index'


function Home() {
    return (
        <main className='' id='home'>
            <Banner bg={banner} overlay={true}>
                <div className='md:max-w-2xl mt-24'>
                    <div>
                        <Title.Subtitle>
                            Hanover Advocacia: Seu Parceiro Jurídico de Confiança
                        </Title.Subtitle>
                        <Title.MainTitle>
                            Soluções jurídicas especializadas para empresas e indivíduos
                        </Title.MainTitle>
                    </div>

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