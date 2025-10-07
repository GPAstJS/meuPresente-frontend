import React from "react"
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {recoverSchema} from '../utils/validations'

import {Header} from '../components/Common/Header/index'

import {Input} from '../components/Common/Input/index'
import {Button} from '../components/Common/Button/index'

export const ForgotPassword = () => {

    const {
            register,
            handleSubmit,
            control,
            formState: { errors },
        } = useForm({ resolver: yupResolver(recoverSchema) });

        const onSubmit = async (data) => {
            const response = await fetch("http://127.0.0.1:8083/users/reset", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            const result = await response.json();
            alert(result.message)

        }
    return (
        <div className="flex flex-col h-screen items-center justify-center gap-y-[15rem]">
            
            <Header/>

            <h1 className="text-3xl">I forgot my password</h1>

            <Input register={register} name={"email"} control={control} error={errors} placeholder={"Digite seu e-mail"} type={"email"} />
            <Button onClick={handleSubmit(onSubmit)} children={<p className="text-2xl">Recuperar senha</p>}/>
        </div>
    )
}