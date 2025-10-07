import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/Common/Button";

export const ThemeChooser = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    const [fileName, setFileName] = useState("");

    // const handleFileChange = (event) => {
    //     const file = event.target.files?.[0];
    //     if (file) {
    //         setValue("background", file);
    //         setFileName(file.name);
    //     }
    // };

    const getData = sessionStorage.getItem("formData");
    const eventData = JSON.parse(getData);

    const onSubmit = async (data) => {
        const eventForm = { ...data, ...eventData };

        console.log("eventForm: ", eventForm);

        const formData = new FormData();

        delete eventForm.background;
        Object.entries(eventForm).forEach(([key, value]) => {
            formData.append(key, value);
        });

        formData.append("arquivo", data.background[0]);

        try {
            console.log("teste: ", data.background);

            const token = sessionStorage.getItem("authToken");

            const response = await fetch("http://127.0.0.1:8083/events/storeNew", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            const result = await response.json();
            console.log("result: ", result);
        } catch (error) {
            console.error("Erro ao enviar:", error);
        }
    };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl">Escolha o design do seu site:</h1>

            <div className="w-[500rem] flex h-[20%] flex-row items-center justify-between gap-x-[25rem]">
                <div className="flex flex-col items-center justify-center">
                    <input value="left" type="radio" {...register("design")} />
                    <label className="text-xl">Left</label>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <input value="center" type="radio" {...register("design")} />
                    <label className="text-xl">Center</label>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <input value="right" type="radio" {...register("design")} />
                    <label className="text-xl">Right</label>
                </div>
            </div>

            <h1 className="text-4xl">Agora escolha uma cor para o seu site:</h1>

            <div className="w-[500rem] h-[20%] flex flex-row items-center justify-between gap-x-[25rem]">
                <div className="flex flex-col items-center justify-center">
                    <input value="blue" type="radio" {...register("color")} />
                    <label className="text-xl">Blue</label>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <input value="red" type="radio" {...register("color")} />
                    <label className="text-xl">Red</label>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <input value="green" type="radio" {...register("color")} />
                    <label className="text-xl">Green</label>
                </div>
            </div>

            <h1 className="text-4xl">
                Por fim, escolha a imagem de fundo do seu site!
            </h1>

            <div className="w-[500rem] h-[20%] flex flex-row items-center justify-center">
                <input
                    // onChange={handleFileChange}
                    {...register("background")}
                    accept="image/*"
                    className="text-3xl"
                    type="file"
                />
            </div>

            <Button onClick={handleSubmit(onSubmit)}>
                <p className="text-2xl">Enviar</p>
            </Button>
        </div>
    );
};
