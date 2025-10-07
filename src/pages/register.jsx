import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../utils/validations";
import { Input } from "../components/Common/Input";
import { Button } from "../components/Common/Button";

export const Register = () => {
    const [inputValue, setInputValue] = useState("");
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = async (data) => {
        console.log("data no submit: ", data);
        delete data.confirmPassword;

        const response = await fetch("http://127.0.0.1:8083/users/store", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        console.log("response: ", response);

        console.log("result: ", result);

        if (response.ok) {
            sessionStorage.setItem("authToken", result.token);
            alert(result.message);
            window.location.href = "/select-event";
        } else {
            alert(result.message);
        }

        return result;
    };

    return (
        <div className="w-full flex items-center justify-center flex-col h-screen gap-[15rem]">
            <div className="w-[50%] grid grid-cols-2 gap-[15rem]">
                <Input
                    label={"Nome Completo"}
                    name={"name"}
                    error={errors}
                    mask=""
                    control={control}
                />
                <Input
                    label={"E-mail"}
                    name={"email"}
                    error={errors}
                    mask=""
                    control={control}
                />
                <Input
                    label={"CPF/CNPJ"}
                    name={"cpfCnpj"}
                    facultativo={true}
                    onChange={setInputValue}
                    error={errors}
                    maskChar={""}
                    mask={
                        inputValue.length <= 14
                            ? "999.999.999-999"
                            : "99.999.999/9999-99"
                    }
                    control={control}
                />
                <Input
                    type={"password"}
                    label={"Senha"}
                    register={register}
                    name={"password"}
                    error={errors}
                    mask=""
                    control={control}
                />
                <Input
                    type={"password"}
                    label={"Confirmar Senha"}
                    register={register}
                    name={"confirmPassword"}
                    error={errors}
                    mask=""
                    control={control}
                />

                <Input
                    label={"Telefone Celular"}
                    register={register}
                    name={"cell"}
                    error={errors}
                    mask="(99) 9 9999-9999"
                    control={control}
                />

                <Input
                    label={"Cidade"}
                    register={register}
                    name={"city"}
                    error={errors}
                    mask=""
                    control={control}
                />
                <Input
                    label={"Estado"}
                    register={register}
                    name={"state"}
                    error={errors}
                    mask=""
                    control={control}
                />
                <Input
                    label={"CEP"}
                    register={register}
                    name={"postalCode"}
                    error={errors}
                    maskChar={""}
                    mask="99999-999"
                    control={control}
                />
                <Input
                    label={"País"}
                    register={register}
                    name={"country"}
                    error={errors}
                    mask=""
                    control={control}
                />
            </div>

            <Button
                onClick={handleSubmit(onSubmit)}
                children={<p className="text-xl ">CRIAR CONTA</p>}
            />
        </div>
    );
};
