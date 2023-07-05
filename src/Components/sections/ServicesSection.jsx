import React from 'react'
import Title from '../Title'

import ServiceCard from '../ServiceCard'
import Button from '../Button'

import { FaChevronRight } from 'react-icons/fa'
import cards from '../../services/cards'


function ServicesSection() {

    return (
        <section className='my-24'>
            <div className="container">
                <Title
                    subtitle='Nossos serviços'
                    title='Escritório de advocacia'
                />
                <div className="cards mt-12 grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
                    {
                        cards.map(({ title, description, icon, id }, i) => (
                            i < 6 && (
                                <ServiceCard
                                    to={`/atuações/${title.toLocaleLowerCase().split(' ').join('-')}`}
                                    title={title}
                                    description={description}
                                    icon={icon}
                                    id={id}
                                    key={id}
                                />
                            )
                        ))


                    }
                </div>
                <div className='flex md:justify-center mt-4'>
                    <Button type='link' to='/atuações' variant='outline' icon={<FaChevronRight className='text-lg' />}>Ver mais atuações</Button>
                </div>
            </div>
        </section>
    )
}

export { ServicesSection, cards }