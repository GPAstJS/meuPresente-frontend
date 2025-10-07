import * as yup from "yup";
import { parse, isBefore } from "date-fns";

export const loginValidationSchema = yup.object({
    email: yup
        .string()
        .email("Formato de e-mail inválido")
        .required("E-mail é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
});


export const formSchema = yup.object({
    eventName: yup.string().max(40).required("É necessário informar o nome do evento!"),
    eventDate: yup
        .string()
        .required("É necessário informar a data do evento!")
        .test("valid-date", "A data deve ser válida!", (value) => {
            if (!value) return false;
            const parsedDate = parse(value, "dd/MM/yyyy", new Date()); // Ajuste o formato conforme necessário
            return !isNaN(parsedDate.getTime()); // Verifica se a data é válida
        })
        .test("future-date", "A data não pode ser no passado!", (value) => {
            if (!value) return false;
            const parsedDate = parse(value, "dd/MM/yyyy", new Date());
            return !isBefore(parsedDate, new Date()); // Garante que a data seja hoje ou no futuro
        }),
    postalCode: yup.string().required("Informe CEP ou código postal!"),
});

export const editProfileSchema = yup.object({
    fullName: yup.string().required("Necessary field!"),
    email: yup.string().required("Necessary field!"),
    phone: yup.string().required("Necessary field!"),
    city: yup.string().required("Necessary field!"),
    state: yup.string().required("Necessary field!"),
    zipCode: yup.string().required("Necessary field!"),
    country: yup.string().required("Necessary field!"),
});

export const registerSchema = yup.object().shape({
    name: yup.string().max(40).required("Name is a required field!"),
    email: yup
        .string()
        .email("Invalid email format!")
        .required("Email is a required field!"),
    password: yup
        .string()
        .min(6, "Password must have at least six digits!")
        .max(40)      
        .required("Password is a required field!"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match!")
        .max(40)
        .required("Confirm Password is a required field!"),
    cpfCnpj: yup.string().test("cpfCnpj", "CPF/CNPJ está errado!", (value) => {
        if (!value) {
            return false;
        }

        if (value.length === 14 || value.length === 18) {
            return true;
        }
    }),
    cell: yup.string().required("Cell phone is a required field!"),
    city: yup.string().max(40).required("City is a required field!"),
    state: yup.string().max(40).required("State is a required field!"),
    postalCode: yup.string().min(9).required("Postal code is a required field!"),
    country: yup.string().max(40).required("Country is a required field!"),
});

export const recoverSchema = yup.object().shape({
    email: yup
        .string()
        .email("Invalid email format!")
        .required("Email is a required field!"),
});

export const newPasswordSchema = yup.object().shape({
    password: yup
        .string()
        .min(6)
        .max(40)
        .required("Password is a required field!"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match!")
        .required("Confirm Password is a required field!"),
});
