import { useState } from "react";

import React from "react";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { formSchema } from "../utils/validations";

import { Form } from "../components/Common/Form";

import { Header } from "../components/Common/Header";

const tag = sessionStorage.getItem("tag");

export const EventForm = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const [formStep, setFormStep] = useState(1);

    const onSubmit = (data) => {
        const formData = { ...data, tag };
        sessionStorage.setItem("formData", JSON.stringify(formData));
        window.location.href = "theme-chooser";
    };

    return (
        <div className="w-full h-screen flex flex-col-reverse sm:flex-col-reverse">
            <div className="relative h-auto w-full mt-[5rem] flex items-center justify-center bg-logoSquare sm:relative sm:w-full sm:mt-[0rem]">
                <ul className="w-[100%] steps sm:steps-horizontal  sm:container sm:max-w-[640rem]">
                    <div className="flex flex-col-reverse items-center sm:items-start justify-between sm:flex-col-reverse">
                        <div>
                            <p
                                className={`text-base font-bold font-roboto w-[100rem] ${(formStep === 1 && "text-base text-[var(--default-purple)] sm:text-base") || ""} sm:text-base sm:w-[175rem]`}
                            >
                                PASSO 1
                            </p>

                            <p
                                className={`text-base font-bold font-roboto w-[100rem] ${(formStep === 1 && "text-base text-[var(--default-purple)] sm:text-base") || ""} sm:text-base sm:w-[175rem]`}
                            >
                                Sobre o evento
                            </p>
                        </div>

                        <li
                            className={`step flex flex-col items-center justify-center sm:justify-start ${(formStep >= 1 && "step-primary") || ""}`}
                        />
                    </div>
                </ul>
            </div>

            <div className="h-full overflow-auto sm:items-center sm:w-5/5">
                <div className="relative h-[80rem] w-full border-b-[3rem] mb-[15rem] border-logoSquare flex justify-center items-center sm:justify-center sm:h-[80rem]">
                    <Header className={"mr-[15rem]"} />
                </div>

                <div className="h-[85%] w-full flex flex-col overflow-auto items-center sm:justify-center sm:container sm:my-auto">
                    {formStep === 1 && (
                        <Form
                            containerStyle={"gap-y-[20rem] sm:gap-y-[30rem]"}
                            titulo={
                                "Agora precisamos de algumas informações sobre o seu evento:"
                            }
                            renders={[
                                {
                                    name: "eventName",
                                    label: "COMO DEVEMOS CHAMAR O SEU EVENTO?",
                                    error: errors,
                                    register: register,
                                    placeholder: "Nome do Evento",
                                    inputStyle: "",
                                    labelStyle: "text-[25rem]",
                                    control: control,
                                },
                                {
                                    name: "eventDate",
                                    label: "QUAL A DATA PLANEJADA PARA O EVENTO?",
                                    error: errors,
                                    register: register,
                                    placeholder: "dd/mm/aaaa",
                                    inputStyle: "",
                                    labelStyle: "text-[25rem]",
                                    control: control,
                                    mask: "99/99/9999",
                                },
                                {
                                    name: "postalCode",
                                    label: "QUAL É O LOCAL DO EVENTO?",
                                    error: errors,
                                    register: register,
                                    placeholder: "Informe o CEP",
                                    inputStyle: "",
                                    labelStyle: "text-[25rem]",
                                    control: control,
                                    mask: "99999-999",
                                },
                            ]}
                            btns={[
                                {
                                    onClick: handleSubmit(onSubmit),
                                    label: "FINALIZAR",
                                    style: "",
                                },
                            ]}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
