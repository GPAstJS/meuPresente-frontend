import React from "react";
import { Input } from "../components/Common/Input/index";
import { Button } from "../components/Common/Button/index";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { newPasswordSchema } from "../utils/validations";

export const ResetPassword = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({ resolver: yupResolver(newPasswordSchema) });

    const url = window.location.href;

    const tokenStarts = url.indexOf("=");

    const token = url.slice(tokenStarts + 1, url.length);

    const onSubmit = async (data) => {
        try {
            delete data.confirmPassword;

            const response = await fetch("http://127.0.0.1:8083/users/update", {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                alert(result.message);
                window.location.href = "/"
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    return (
        <div className="flex flex-col h-screen items-center justify-center gap-y-[25rem]">
            <h1 className="text-2xl">Criar uma nova senha</h1>

            <Input
                placeholder={"Nova senha"}
                register={register}
                name={"password"}
                error={errors}
                type={"password"}
                control={control}
            />
            <Input
                placeholder={"Confirmar nova senha"}
                register={register}
                name="confirmPassword"
                error={errors}
                control={control}
                type={"password"}
            />

            <Button
                onClick={handleSubmit(onSubmit)}
                children={<p className="text-base">Confirmar</p>}
            />
        </div>
    );
};
