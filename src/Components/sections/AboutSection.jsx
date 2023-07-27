import React from 'react'
// import Title from '../Title'
import { Title } from '../Title/Index'
import Button from '../Button'
import { FaChevronRight } from 'react-icons/fa'

function AboutSection() {
    return (
        <section id='about' className='py-16 about-bg' >
            <div className="container">
                <div className="frame md:p-14 sm:p-10 p-8 bg-about text-white max-w-[500px]">
                    <div>
                        <Title.Subtitle className='md:text-md sm:text-md text-sm'>
                            nossa historia
                        </Title.Subtitle>
                        <Title.MainTitle className='md:text-3xl uppercase text-xl'>
                            quem somos
                        </Title.MainTitle>
                    </div>

                    <div className="text mt-4">
                        <p>
                            Somos a Hanover Advocacia, um escritório de advocacia comprometido em oferecer soluções jurídicas eficientes e personalizadas para nossos clientes. Com uma equipe dedicada e especializada, buscamos sempre a excelência em nosso trabalho, atuando de forma ética e com total transparência. Nossa missão é superar as expectativas, oferecendo um serviço jurídico de qualidade e construindo relacionamentos de confiança duradouros com nossos clientes. Conte conosco para defender seus interesses e fornecer o suporte jurídico necessário em todas as etapas do processo.
                        </p>
                    </div>
                    <div className='mt-4'>
                        <Button icon={<FaChevronRight />}>
                            saiba mais
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection