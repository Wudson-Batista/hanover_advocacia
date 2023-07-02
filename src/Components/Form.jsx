import React from 'react'
import FormInput from './FormInput'
import Title from './Title'
import Button from './Button'
import { FaPaperPlane } from 'react-icons/fa'

function Form() {
    return (
        <form action="" className='py-20 max-lg:container lg:pl-20 lg:pe-10'>
            <Title inverted={true} subtitle='Vamos conversar?' title='Entre em contato com o nosso escritório e descubra como nossos advogados podem te ajudar'></Title>
            <div className='mt-8 flex flex-col gap-4'>
                <FormInput label='Nome' isRequired={true} inputType='text'></FormInput>
                <FormInput label='E-mail' isRequired={true} inputType='email'></FormInput>
                <FormInput label='Telefone' inputType='text'></FormInput>
                <FormInput label='Mensagem' isRequired={true} inputType='textarea'></FormInput>
            </div>
            <div className='mt-6'>
                <Button icon={<FaPaperPlane />} type='submit'>
                    Enviar
                </Button>
            </div>
        </form>
    )
}

export default Form