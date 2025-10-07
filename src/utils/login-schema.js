import * as yup from "yup";

export const loginValidationSchema = yup.object({
    email: yup
        .string()
        .email("Formato de e-mail inválido")
        .required("E-mail é obrigatório"),
    password: yup
        .string()
        .min(6, "A senha deve ter pelo menos 6 caracteres")
        .required("Senha é obrigatória"),
});
