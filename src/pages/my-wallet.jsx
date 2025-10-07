import React from "react";
import { useForm } from "react-hook-form";

export const MyWallet = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch(
                "https://sandbox.asaas.com/api/v3/customers",
                {
                    method: "POST",
                    headers: {
                        access_token:
                            "$aact_MzkwODA2MWY2OGM3MWRlMDU2NWM3MzJlNzZmNGZhZGY6OjE3Y2Q1MDk2LTMwZDEtNGU0ZS1hM2QzLTE2MGJmZDcyYzlhMTo6JGFhY2hfYjMxNmYyYzgtNjllMy00NjRhLWE3M2QtNWZhODdlMTJkODQy",
                        accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                },
            );

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error("Request failed:", error);
        }
    };

    return (
        <div className="p-[50rem] flex flex-col w-[425rem] gap-y-[25rem]">
            <h1 className="text-xl">Criação de conta Asaas</h1>

            <div className="grid grid-cols-2 gap-[25rem]">
                <input
                    {...register("name", { required: "Nome é obrigatório" })}
                    className="text-xl border-black border-[1rem] p-[5rem]"
                    placeholder="Nome"
                    type="text"
                />
                {errors.name && <span>{errors.name.message}</span>}

                <input
                    {...register("email", { required: "E-mail é obrigatório" })}
                    className="text-xl border-black border-[1rem] p-[5rem]"
                    placeholder="E-mail"
                    type="email"
                />
                {errors.email && <span>{errors.email.message}</span>}
            </div>

            <button
                onClick={handleSubmit(onSubmit)}
                className="text-xl bg-green-500 text-white"
            >
                Enviar
            </button>
        </div>
    );
};
