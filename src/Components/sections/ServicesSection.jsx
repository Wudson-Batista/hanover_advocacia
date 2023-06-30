import React from 'react'
import Title from '../Title'

import briefcase from '../../assets/icons/briefcase.png'
import worker from '../../assets/icons/worker.png'
import family from '../../assets/icons/family.png'
import money from '../../assets/icons/money.png'
import handcuffs from '../../assets/icons/handcuffs.png'
import hacker from '../../assets/icons/hacker.png'
import shop from '../../assets/icons/shop.png'
import home from '../../assets/icons/home.png'
import ServiceCard from '../ServiceCard'
import Button from '../Button'

import { FaChevronRight } from 'react-icons/fa'

function ServicesSection() {
    const cards = [
        {
            id: 1,
            icon: briefcase,
            title: "Direito Empresarial",
            description: "Somos um escritório de advocacia especialista em Direito Empresarial. Contamos com uma equipe multidisciplinar pronta para melhor defender nossos clientes.",
        },
        {
            id: 2,
            icon: worker,
            title: "Direito Trabalhista",
            description: "Relações familiares, por vezes, geram conflitos. Atuamos com perícia e cuidado nos assuntos advindos do Direito de Família.",
        },
        {
            id: 3,
            icon: family,
            title: "Direito de Familia",
            description: "Relações familiares, por vezes, geram conflitos. Atuamos com perícia e cuidado nos assuntos advindos do Direito de Família.",
        },
        {
            id: 4,
            icon: money,
            title: "Direito Tributário",
            description: "O advogado em Direito Tributário realiza serviços de natureza judicial e administrativa, promovendo a defesa nas mais diversas áreas da esfera tributária.",
        },
        {
            id: 5,
            icon: handcuffs,
            title: "Direito Criminal",
            description: "O Direito Criminal se relaciona a atos dentro da esfera penal. Contamos com equipe capacitada na área para melhor defender os direitos de nossos clientes.",
        },
        {
            id: 6,
            icon: shop,
            title: "Direito do Consumidor",
            description: "O Direito do Consumidor está relacionado aos conflitos advindos das relações de consumo. Contamos com uma equipe especialista no assunto.",
        },
        {
            id: 7,
            icon: hacker,
            title: "Direito Cibernético",
            description: "Novas tecnologias levam, também, a novos conflitos. Prestamos serviços jurídicos especializados em Direito Digital.",
        },
        {
            id: 8,
            icon: home,
            title: "Direito Imobiliário",
            description: "Somos um escritório de advocacia especialista em Direito Imobiliário. Contamos com equipe multidisciplinar pronta para melhor defender nossos clientes.",
        },
    ]

    return (
        <section className='my-24'>
            <div className="container">
                <Title
                    subtitle='Nossos serviços'
                    title='Escritório de advocacia'
                />
                <div className="cards mt-12 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2   gap-6">
                    {cards.map(({ title, description, icon, id }) => (
                        <ServiceCard
                            title={title}
                            description={description}
                            icon={icon}
                            id={id}
                        />
                    ))}
                </div>
                <div className='flex md:justify-center mt-4'>
                    <Button variant='outline' icon={<FaChevronRight className='text-lg' />}>Ver mais atuações</Button>
                </div>
            </div>
        </section>
    )
}

export default ServicesSection