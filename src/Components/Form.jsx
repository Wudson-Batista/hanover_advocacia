import React from 'react'
import FormInput from './FormInput'
import Button from './Button'
import { FaPaperPlane } from 'react-icons/fa'
import { FormProvider, useForm } from 'react-hook-form'
import { Title } from '../Components/Title/Index'

function Form() {

    const form = useForm();

    const {
        handleSubmit,
    } = form

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <FormProvider {...form}>
            <form onSubmit={handleSubmit(handleSubmit(onSubmit))} className='py-20 max-lg:container lg:pl-20 lg:pe-10'>
                <div>
                    <Title.Subtitle>
                        Vamos conversar?
                    </Title.Subtitle>
                    <Title.MainTitle>
                        Entre em contato com o nosso escritório e descubra como nossos advogados podem te ajudar
                    </Title.MainTitle>
                </div>
                <div className='mt-8 flex flex-col gap-4'>
                    {/* <FormInput label='Nome' isRequired={true} inputType='text'></FormInput> */}

                    <FormInput label='Nome' field='name' isRequired={true} inputType='text'></FormInput>
                    <FormInput label='E-mail' field='email' isRequired={true} inputType='email'></FormInput>
                    <FormInput label='Telefone' field='phone' inputType='text'></FormInput>
                    <FormInput label='Mensagem' field='mensage' isRequired={true} inputType='textarea'></FormInput>
                </div>
                <div className='mt-6'>
                    <Button icon={<FaPaperPlane />} type='submit'>
                        Enviar
                    </Button>
                </div>
            </form>
        </FormProvider>
    )
}

export default Form