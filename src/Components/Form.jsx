import React from 'react'
import Button from './Button'
import { FaPaperPlane } from 'react-icons/fa'
import { FormProvider, useForm } from 'react-hook-form'
import { Title } from '../Components/Title/Index'
import { Input } from '../Components/Input/Index'
import { yupResolver } from '@hookform/resolvers/yup'
import validationSchema from '../utils/validation/schema'
import ErrorMessage from './Input/ErrorMessage'

function Form() {

    const form = useForm(
        { resolver: yupResolver(validationSchema), }
    );

    const {
        handleSubmit,
        formState: { errors }
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
                    <div>
                        <Input.Wrapper>
                            <Input.FormInput field="name" />
                            <Input.Label htmlFor='floating_name'>
                                Nome
                            </Input.Label>
                        </Input.Wrapper>
                        <ErrorMessage field="name"></ErrorMessage>
                    </div>
                    <div>
                        <Input.Wrapper>
                            <Input.FormInput field="email" />
                            <Input.Label htmlFor='floating_email'>
                                E-mail
                            </Input.Label>
                        </Input.Wrapper>
                        <ErrorMessage field="email"></ErrorMessage>
                    </div>
                    <div>
                        <Input.Wrapper>
                            <Input.FormInput field="phone" />
                            <Input.Label htmlFor='floating_phone'>
                                Telefone
                            </Input.Label>
                        </Input.Wrapper>
                        <ErrorMessage field="phone"></ErrorMessage>
                    </div>
                    {/* <FormInput label='Mensagem' field='mensage' isRequired={true} inputType='textarea'></FormInput> */}
                    <div>
                        <Input.Wrapper>
                            <Input.TextArea field='message' />
                            <Input.Label htmlFor='floating_message' className='peer-placeholder-shown:top-1/4'>
                                Mensagem
                            </Input.Label>
                        </Input.Wrapper>
                        <ErrorMessage field="message"></ErrorMessage>
                    </div>
                </div>
                <div className='mt-6'>
                    <Button icon={<FaPaperPlane />} type='submit'>
                        Enviar
                    </Button>
                </div>
            </form>
        </FormProvider >
    )
}

export default Form