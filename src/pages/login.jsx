import { React, useState, useEffect } from "react";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { loginValidationSchema } from "../utils/login-schema";

import Img1 from "../assets/images/1.jpg";
import Img2 from "../assets/images/2.jpg";
import Img3 from "../assets/images/3.jpg";
import Img4 from "../assets/images/4.jpg";

import { Modal } from "../components/Common/Modal";

import { Logo } from "../components/Common/Logo";
import { Input } from "../components/Common/Input";
import { Button } from "../components/Common/Button";

import { RiLock2Fill } from "react-icons/ri";

export const Login = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({ resolver: yupResolver(loginValidationSchema) });

    const [images] = useState([Img1, Img2, Img3, Img4]);

    const [count, setCount] = useState(0);

    const [openModal, setOpenModal] = useState(false);
    const [events, setEvents] = useState([]);

    // const { login } = useLogin();

    const getEvents = async () => {
        const url = "http://127.0.0.1:8083/events/getEvents";
        const response = await fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
            },
        });

        const result = await response.json();
        if (result.result.length > 0) {
            setOpenModal(true);
            console.log(result.result);
            setEvents(result.result);
        }
        return result;
    };

    const login = async (data) => {
        try {
            const url = "http://127.0.0.1:8083/auth/login";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            console.log(result);

            if (!response.ok) {
                throw new Error(result.message || "Erro ao fazer login");
            }

            if (result.response?.token) {
                sessionStorage.setItem("authToken", result.response.token);
                getEvents();
            } else {
                throw new Error("Token não encontrado na resposta.");
            }
        } catch (err) {
            console.error("Erro ao fazer login:", err.message);
        }
    };

    useEffect(() => {
        const timer = setInterval(
            () =>
                setTimeout(
                    () => setCount((prevCount) => (prevCount + 1) % images.length),
                    250,
                ),
            2500,
        );

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative flex">
            {openModal && <Modal arr={events} />}
            <div className="absolute w-full h-screen z-10 flex flex-col items-center justify-center gap-[20rem] sm:relative sm:w-[50%] sm:px-[20rem] ">
                <div className="w-full flex items-center justify-center">
                    <Logo
                        squareClassName={
                            "bg-logoSquare h-[40rem] w-[40rem] sm:h-[40rem] sm:w-[40rem] sm:left-0"
                        }
                        markClassName={
                            "text-[20rem] text-logoColor font-bold sm:text-[30rem]"
                        }
                    />
                </div>

                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="flex flex-col w-full items-center justify-center py-[10rem] gap-[8rem]">
                        <h2 className="text-[40rem] font-roboto">LOGIN</h2>

                        <div className="flex flex-col items-center sm:w-full w-[80%]">
                            <div className="flex flex-col w-[80%] max-w-[500rem] sm:w-full">
                                <Input
                                    control={control}
                                    name="email"
                                    type="email"
                                    label="Email"
                                    error={errors}
                                    placeholder={"example@email.com"}
                                    register={register}
                                />
                            </div>

                            <div className="text-end flex flex-col justify-center w-[80%] max-w-[500rem] sm:w-full">
                                <Input
                                    control={control}
                                    name={"password"}
                                    type={"password"}
                                    label="Password"
                                    error={errors}
                                    register={register}
                                    placeholder={"Insert your password"}
                                />

                                <a
                                    className="mb-[5rem] text-[12rem] text-[var(--default-purple)] font-roboto text-right underline mt-[6rem]"
                                    href="/forgot-password"
                                >
                                    I forgot my password
                                </a>

                                <a
                                    className="mb-[5rem] text-[12rem] text-[var(--default-purple)] font-roboto text-right underline mt-[6rem]"
                                    href="/register"
                                >
                                    Not registered yet? Click here!
                                </a>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            // className={`bg-button text-white flex flex-row items-center justify-center gap-x-[10rem]`}
                            onClick={handleSubmit(login)}
                        >
                            <RiLock2Fill className="w-[20rem] h-[20rem]" />

                            <p className="text-[20rem]">Login</p>
                        </Button>
                    </div>
                </form>
            </div>

            <div className="w-[100%] h-screen opacity-75 sm:w-[50%] sm:opacity-100">
                {/* Imagem em exibição */}
                <img className="w-full h-screen" src={images[count]} alt="Cover" />
            </div>
        </div>
    );
};
