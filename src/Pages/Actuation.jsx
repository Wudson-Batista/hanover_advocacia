import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../Components/Banner'
import banner from '../assets/banner-bg-empresa.png'
import cards from '../services/cards'

import Title from '../Components/Title'
import Button from '../Components/Button'

function Actuation() {
    const { actuation } = useParams()

    const [currentActuation, setCurrentActuation] = useState([])

    useEffect(() => {
        setCurrentActuation(cards
            .filter(card => card.title.toLocaleLowerCase().split(' ').join('-') === actuation)
        )

    }, [actuation])


    return (
        <main className='text-blue-grey-600 font-medium'>
            {
                currentActuation.length !== 0 ? (
                    currentActuation?.map(actuation => (
                        <div key={actuation?.id}>
                            <Banner overlay={true} bg={banner}>
                                <div className='text-center w-full'>
                                    <Title title={actuation?.title} subtitle='hanover advocacia - rj' />
                                </div>
                            </Banner>
                            <div className='container'>
                                <section className='mt-12 py-14 border-b-2 border-blue-grey-300/60'>
                                    <div className='flex max-lg:flex-col gap-10'>
                                        <div className='lg:w-3/5'>
                                            <h3 className='font-serif text-gold-400 uppercase text-xl mb-3'>{actuation?.title}</h3>
                                            <p>{actuation?.text}</p>
                                        </div>
                                        <div className="lg:w-2/5 square bg-card p-6 text-white rounded text-center flex-col flex items-center">
                                            <p>
                                                Precisa de ajuda jurídica em Direito empresarial? <span className='underline'>Hanover advocacia</span> pode ajudar você!
                                            </p>

                                            <Button type='link' to={{ pathname: '/', hash: '#contact' }} variant='outline'>
                                                Entre em contato
                                            </Button>

                                        </div>
                                    </div>
                                </section>
                                <section className='py-14 border-b-2 border-blue-grey-300/60'>
                                    <h3 className='font-serif text-gold-400 uppercase text-xl mb-3'>O que fazemos</h3>
                                    <ul className='list-disc grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-3 gap-y-4 text-blue-grey-600 font-medium list-inside'>
                                        {
                                            actuation.services.map(({ service, id }) => (
                                                <li className='' key={id}>
                                                    {service}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </section>

                                <section className='py-14'>
                                    <div className='grid lg:grid-cols-2 lg:gap-8 gap-6'>
                                        {
                                            actuation.whatis.map((item, id) => (
                                                <div key={id}>
                                                    {item.content}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </section>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>Não foi possivel encontrar esta atuação</div>
                )
            }

        </main>
    )
}

export default Actuation