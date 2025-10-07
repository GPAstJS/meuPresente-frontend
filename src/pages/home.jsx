import React, {useEffect} from "react";

import { Header } from "../components/Common/Header";

import { startTokenExpirationCheck } from "../utils/authUtils";

export const Home = () => {
    const eventData = JSON.parse(sessionStorage.getItem("selectedEvent"));

    if (!eventData) {
        window.location.href = "/";
    }

        useEffect(() => {
            startTokenExpirationCheck();
        }, []);

    console.log(eventData);

    return (
        <div className="w-full h-screen flex flex-col flex ">
            <Header className={"p-[25rem]"} headerMenu={true} />

            <div
                style={{    
                    backgroundImage: `url(http://127.0.0.1:8083/uploads/${eventData.background})`,
                    backgroundRepeat: "no-repeat",
                }}
                className={`flex flex-col w-full h-full items-center justify-center bg-cover`}
            >
                <p className="text-4xl font-bold bg-white rounded-[25rem] h-[45rem] px-[10rem] flex items-center justify-center mb-[10rem]">{eventData?.tag || "N/A"}</p>
                <p className="text-5xl font-bold bg-white rounded-[25rem] h-[45rem] px-[10rem] flex items-center justify-center">{eventData?.name}</p>

                <div className="flex flex-row  justify-center gap-x-[25rem] mt-[25rem]">

                    <div className="bg-white p-[25rem] rounded-[25rem]">


                    <div className="w-[375rem] h-[250rem] border-black border-[1rem] flex items-center justify-center rounded-[25rem]">
                        <p className="text-3xl font-bold bg-white rounded-[25rem] h-[45rem] px-[10rem] flex items-center justify-center">Maps API</p>
                    </div>

                    </div>

                    <div className="flex flex-col gap-y-[15rem]">
                        <p className="text-2xl">{eventData.date}</p>
                        <p className="flex items-center justify-center text-2xl bg-white h-[45rem] rounded-[25rem] px-[10rem]">
                            Endereço: Logradouro, Número, Cidade, Estado.
                        </p>
                        <p className="text-2xl">CEP: {eventData.postalCode}</p>
                    </div>
                </div>
                <a
                    href="/shop"
                    className="flex items-center justify-center text-3xl font-bold text-white h-[60rem] px-[25rem] bg-green-600 mt-[25rem] rounded-[25rem]"
                >
                    Lista de Presentes
                </a>
            </div>
        </div>
    );
};
