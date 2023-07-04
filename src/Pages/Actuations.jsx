import React from 'react'
import Banner from '../Components/Banner'
import actuactionsBg from '../assets/actuations-bg.jpg'
import Title from '../Components/Title'
import Button from '../Components/Button'
import ServiceCard from '../Components/ServiceCard'
import { cards } from '../Components/sections/ServicesSection'

function Actuations() {
    return (
        <div>
            <Banner bg={actuactionsBg} overlay={true}>
                <div className="container flex h-[calc(70vh)] items-center">
                    <div className='md:max-w-2xl '>
                        <Title
                            subtitle={'ÁREAS DE ATUAÇÃO'}
                            title={'Conheça as áreas de atuação de nossos advogados.'}
                        />
                        <Button variant='outline' >Entre em contato</Button>
                    </div>
                </div>
            </Banner>

            <div className="actuations-card my-20">
                <div className="container">
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-8'>
                        {
                            cards.map(({ title, description, icon, id }) => (
                                <ServiceCard
                                    title={title}
                                    description={description}
                                    icon={icon}
                                    id={id}
                                    key={id}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>



    )
}

export default Actuations