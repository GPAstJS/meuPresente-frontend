// import Casamento from "../../assets/images/1.jpg";
import { FaHeart } from "react-icons/fa6";

import { Logo } from "../Logo/index";

export const TemplateCasamento = () => {
    return (
        <div className="container w-full h-screen flex flex-col items-center ">
            <div className="w-full h-[12%] bg-white flex flex-row justify-between items-center px-[45rem]">
                <div className="flex items-center px-[45rem]">
                    <Logo
                        squareClassName={
                            "bg-logoCardBorder xs:left-[-10rem] xs:h-[45rem] xs:w-[45rem] md:h-[60rem] md:w-[60rem] md:left-[-15rem]"
                        }
                        markClassName={
                            "text-logoColor font-bold xs:text-2xl md:text-3xl lg:text-3xl"
                        }
                    />
                </div>

                <div className="flex flex-row gap-x-[100rem] px-[50rem]">
                    <a
                        className="text-logoCardBorder text-xl font-roboto font-bold"
                        href="#"
                    >
                        Editar meu site
                    </a>
                    <a
                        className="text-logoCardBorder text-xl font-roboto font-bold"
                        href=""
                    >
                        Lista de presentes
                    </a>

                    <a
                        className="text-logoCardBorder text-xl font-roboto font-bold"
                        href="#"
                    >
                        Minha carteira
                    </a>

                    <a
                        className="text-logoCardBorder text-xl font-roboto font-bold"
                        href="#"
                    >
                        Minha conta
                    </a>
                </div>
            </div>

            <div
                className={`h-[90%] w-full  flex items-center justify-center flex-col bg-casamento`}
            >
                <div className="flex flex-col items-center justify-center w-full mt-[200rem]">
                    <h1 className="text-8xl text-white font-cinzel ">
                        CATARINA E AUGUSTO
                    </h1>

                    <div className="flex flex-row items-center justify-between gap-x-[30rem] select-none mb-[50rem]">
                        <p className="text-transparent line-through decoration-white decoration-solid text-3xl">
                            ..................
                        </p>

                        <FaHeart className="fill-white h-[32rem] w-[32rem]" />

                        <p className="text-black line-through decoration-white decoration-solid text-3xl">
                            ..................
                        </p>
                    </div>

                    <h2 className="text-7xl text-white font-cinzel">12/02/2025</h2>

                    <div className="flex flex-row items-center justify-between gap-x-[100rem] mt-[50rem]">
                        <a
                            className="font-roboto font-bold text-white text-3xl"
                            href="#"
                        >
                            O CASAL
                        </a>
                        <a
                            className="font-roboto font-bold text-white text-3xl"
                            href="#"
                        >
                            LISTA DE PRESENTES
                        </a>

                        <a
                            className="font-roboto font-bold text-white text-3xl"
                            href="#"
                        >
                            CONFIRME SUA PRESENÇA
                        </a>
                    </div>

                    <label
                        className="font-roboto font-bold text-white text-xl bg-logoCardBorder rounded-[15rem] px-32 mt-[50rem]"
                        htmlFor=""
                    >
                        Clique em editar para personalizar esta página
                    </label>
                </div>
            </div>
        </div>
    );
};
