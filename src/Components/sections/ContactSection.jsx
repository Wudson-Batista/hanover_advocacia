import React from 'react'
import Form from '../Form'
import Map from '../Map'

function ContactSection() {
    return (
        <section className='mb-16 bg-about'>
            <div className='container grid grid-cols-2 gap-5'>
                <Form></Form>
            </div>
            <Map></Map>

        </section>
    )
}

export default ContactSection