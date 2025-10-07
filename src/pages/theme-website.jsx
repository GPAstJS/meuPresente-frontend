import React from "react";

import { Card } from "../components/Common/Card";
import { Logo } from "../components/Common/Logo";

import Test from "../assets/images/1.jpg";

export const ThemeWebsite = () => {
    const testArr = {
        primaryColor: "#FFF",
        secondaryColor: "#F00",
        tag: "tag",
        websiteFlow: [],
        backgroundImg: "bg",
    };

    return (
        <div className="w-full min-h-screen flex-col bg-black">
            <div className="w-full px-[40rem] flex items-center justify-end p-[20rem]">
                <Logo
                    squareClassName={
                        "bg-[var(--default-purple)] h-[40rem] w-[40rem] sm:h-[40rem] sm:w-[40rem] sm:left-0"
                    }
                    markClassName={
                        "text-[20rem] text-white font-bold sm:text-[30rem]"
                    }
                />
            </div>

            <div className="w-full items-center justify-center flex flex-col">
                <h1 className="font-roboto font-bold text-white text-center text-[60rem]">
                    Agora só falta a escolha <br /> do tema do seu site
                </h1>

                <p className="font-roboto font-bold text-white mt-[20rem] text-[30rem] text-center">
                    QUAL COMBINA COM O SEU EVENTO?
                </p>

                <div className="flex flex-row flex-wrap items-center justify-center p-[20rem] mt-[30rem] gap-[20rem] md:w-[80%] sm:justify-between ">
                    <Card
                        cardStyle={`w-[235rem] h-[345rem] rounded-[40rem] border-[7rem] border-[#68649D] sm:w-[200rem] sm:h-[415rem]`}
                        cardName="Teste"
                        cardImage={Test}
                        cardNameStyle={
                            "sm:text-[30rem] text-2xl font-roboto font-bold text-white absolute bottom-[30rem]"
                        }
                    />
                    <Card
                        cardStyle={`w-[235rem] h-[345rem] rounded-[40rem] border-[7rem] border-[#68649D] sm:w-[200rem] sm:h-[415rem]`}
                        cardName="Teste"
                        cardImage={Test}
                        cardNameStyle={
                            "sm:text-[30rem] text-2xl font-roboto font-bold text-white absolute bottom-[30rem]"
                        }
                    />
                    <Card
                        cardStyle={`w-[235rem] h-[345rem] rounded-[40rem] border-[7rem] border-[#68649D] sm:w-[200rem] sm:h-[415rem]`}
                        cardName="Teste"
                        cardImage={Test}
                        cardNameStyle={
                            "sm:text-[30rem] text-2xl font-roboto font-bold text-white absolute bottom-[30rem]"
                        }
                    />
                    <Card
                        cardStyle={`w-[235rem] h-[345rem] rounded-[40rem] border-[7rem] border-[#68649D] sm:w-[200rem] sm:h-[415rem]`}
                        cardName="Teste"
                        cardImage={Test}
                        cardNameStyle={
                            "sm:text-[30rem] text-2xl font-roboto font-bold text-white absolute bottom-[30rem]"
                        }
                    />
                    <Card
                        cardStyle={`w-[235rem] h-[345rem] rounded-[40rem] border-[7rem] border-[#68649D] sm:w-[200rem] sm:h-[415rem]`}
                        cardName="Teste"
                        cardImage={Test}
                        cardNameStyle={
                            "sm:text-[30rem] text-2xl font-roboto font-bold text-white absolute bottom-[30rem]"
                        }
                    />
                </div>
            </div>
        </div>
    );
};
