import React from 'react'
import Title from '../Title'

import briefcase from '../../assets/icons/briefcase.png'
import worker from '../../assets/icons/worker.png'
import family from '../../assets/icons/family.png'
import money from '../../assets/icons/money.png'
import handcuffs from '../../assets/icons/handcuffs.png'
import hacker from '../../assets/icons/hacker.png'

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
            id: 3,
            icon: money,
            title: "Direito Tributário",
            description: "O advogado em Direito Tributário realiza serviços de natureza judicial e administrativa, promovendo a defesa nas mais diversas áreas da esfera tributária.",
        },
        {
            id: 4,
            icon: handcuffs,
            title: "Direito Criminal",
            description: "O Direito Criminal se relaciona a atos dentro da esfera penal. Contamos com equipe capacitada na área para melhor defender os direitos de nossos clientes.",
        },
        {
            id: 5,
            icon: hacker,
            title: "Direito Cibernético",
            description: "Novas tecnologias levam, também, a novos conflitos. Prestamos serviços jurídicos especializados em Direito Digital.",
        },
    ]

    return (
        <section className='my-24'>
            <div className="container">
                <Title
                    subtitle='Nossos serviços'
                    title='Escritório de advocacia'
                />
                <div className="cards">
                    {cards.map(card => (
                        <div>
                            <img src={card.icon} alt="" />
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection