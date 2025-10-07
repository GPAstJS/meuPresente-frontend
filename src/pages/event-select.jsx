import React from "react";
import { Card } from "../components/Common/Card";
import { Header } from "../components/Common/Header";
import { Waves } from "../components/Common/Shapes/Waves";

import { useEffect } from "react";

import { Link } from "react-router-dom";
    
import Casamento from "../assets/images/Casamento.jpg";
import Formatura from "../assets/images/Formatura.jpg"
import ChaDeBebe from "../assets/images/ChaDeBebe.jpg"
import Cerimonial from "../assets/images/Cerimonial.webp"
import Empresarial from "../assets/images/Empresarial.jpg"

import { startTokenExpirationCheck } from "../utils/authUtils";

export const EventSelect = () => {
    useEffect(() => {
        startTokenExpirationCheck();
    }, []);

    const eventTypes = [
        "Casamento",
        "Formatura",
        "Chá de Bebê",
        "Cerimonial",
        "Empresarial",
    ];

    const eventImages = [Casamento, Formatura, ChaDeBebe, Cerimonial, Empresarial]

    return (
        <div className="container w-full flex flex-col items-center h-screen mx-auto my-auto gap-[30rem] relative">
            <div className="absolute bg-[var(--default-purple-opacity)] w-[100vw] h-[70%] top-[30%] z-[1]">
                <Waves />
            </div>

            <div className="w-full flex justify-start items-center py-[50rem]">
                <Header />
            </div>

            <div className="flex flex-col items-center justify-center z-[10]">
                <h1 className="text-[65rem] leading-tight font-roboto font-bold text-logoColor text-center">
                    Vamos preparar o seu evento
                </h1>

                <p className="text-[30rem] font-roboto font-bold text-logoCardBorder">
                    QUE TIPO DE EVENTO VOCÊ ESTÁ PLANEJANDO?
                </p>
            </div>

            <div className="h-auto flex flex-wrap py-[20rem] gap-[40rem] p-[5rem] justify-center z-[10]">
                {eventTypes.map((e, i) => {
                    return (
                        <Card
                            onClick={() => {
                                sessionStorage.setItem("tag", e.trim().toLowerCase());
                                window.location.href = "/event-form"
                            }
                            }
                            key={"cardElement" + i}
                            cardStyle="rounded-[40rem] border-[7rem] border-logoCardBorder"
                            cardNameStyle="text-3xl font-roboto font-bold text-black"
                            cardName={e} //Irá vir com Json do serv
                            cardImage={eventImages[i]} //Irá vir com Json do serv
                        />
                    );
                })}
            </div>
        </div>
    );
};
