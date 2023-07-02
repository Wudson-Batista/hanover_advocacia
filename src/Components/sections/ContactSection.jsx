import React from 'react'
import Form from '../Form'
import Map from '../Map'
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import ContactInfo from '../ContactInfo'

function ContactSection() {
    return (
        <section className='mb-16 bg-about'>
            <div className='grid lg:grid-cols-2'>
                <Form></Form>
                <div className='contact-info bg-blue-grey-100 max-lg:container lg:pe-20 py-20 lg:pl-10'>
                    <h3 className='font-semibold md:text-3xl text-xl mb-1  font-serif'>Entre em contato</h3>
                    <div className="contact-infos mt-10 flex flex-col gap-8">
                        <ContactInfo
                            icon={<FaMapMarkerAlt className='text-lg'></FaMapMarkerAlt>}
                            info='Av. Automóvel Clube, 922 - Santa Cruz da Serra, Duque de Caxias - RJ, 25260-000'
                        />
                        <ContactInfo
                            icon={<FaPhoneAlt className='text-lg'></FaPhoneAlt>}
                            info='+55 (21) 99999-9999'
                        />
                        <ContactInfo
                            icon={<FaEnvelope className='text-lg'></FaEnvelope>}
                            info='atendimento@hanoveradv.com'
                        />

                    </div>
                </div>
            </div>
            <Map></Map>

        </section>
    )
}

export default ContactSection