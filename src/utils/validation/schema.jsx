import * as yup from 'yup';
import { phoneNumber } from './pattern';

const validationSchema = yup
    .object({
        name: yup.string()
            .required("Nome é um campo obrigatório")
            .min(2, "Você deve inserir pelo menos 3 caracteres"),
        email: yup.string()
            .email("Email inválido")
            .required("Email é um campo obrigatório"),
        phone: yup.string()
            .required("Telefone é um campo obrigatório")
            .matches(phoneNumber, "Telefone inválido"),
        message: yup.string()
            .min(15, "Digite no mínimo 10 caracteres")
            .max(180, "Digite no máximo 150 caracteres")
            .required("Mensagem é um campo obrigatório"),
    })
    .required()


export default validationSchema;