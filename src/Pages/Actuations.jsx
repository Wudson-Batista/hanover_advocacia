import React, { useEffect } from 'react'
import Banner from '../Components/Banner'
import actuactionsBg from '../assets/actuations-bg.jpg'
import Title from '../Components/Title'
import Button from '../Components/Button'
import ServiceCard from '../Components/ServiceCard'
import { cards } from '../Components/sections/ServicesSection'

function Actuations() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>
            <Banner id='actuations-banner' bg={actuactionsBg} overlay={true}>
                <div className="container flex items-center h-screen">
                    <div className='md:max-w-2xl mt-24'>
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
                    <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-8 auto-rows-[300px] '>
                        {
                            cards.map(({ title, description, icon, id }) => (
                                <ServiceCard
                                    to={`/atuações/${title.toLocaleLowerCase().split(' ').join('-')}`}
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

        </div >



    )
}

export default Actuations