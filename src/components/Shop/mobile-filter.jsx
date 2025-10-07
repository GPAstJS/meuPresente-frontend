import clsx from "clsx";
import { useState } from "react";

const categorias = [
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
    "String",
];

export const MobileFilter = () => {
    const [filter, setFilter] = useState("categoria");

    return (
        <div className="flex flex-col w-full h-fit absolute bottom-0 ">
            <div className="flex flex-row  bg-[#F1F0FC] w-full items-center justify-center">
                <div className="flex flex-col w-[20%] rounded-[15rem]">
                    <div className="flex flex-col  rounded-[15rem] ">
                        <label
                            onClick={() => setFilter("a-z")}
                            className={clsx(
                                "text-base font-roboto border-black border-b-[1rem] px-[10rem] py-[15rem] cursor-pointer",
                                (filter === "a-z" &&
                                    "bg-[var(--filter-mobile-active)]") ||
                                    "bg-white",
                            )}
                        >
                            A-Z
                        </label>
                        <label
                            onClick={() => setFilter("preço")}
                            className={clsx(
                                "text-base font-roboto border-black border-b-[1rem] px-[10rem] py-[15rem] cursor-pointer",
                                (filter === "preço" &&
                                    "bg-[var(--filter-mobile-active)]") ||
                                    "bg-white",
                            )}
                        >
                            Preço
                        </label>
                        <label
                            onClick={() => setFilter("categoria")}
                            className={clsx(
                                "text-base font-roboto border-black border-b-[1rem] px-[10rem] py-[15rem] cursor-pointer",
                                (filter === "categoria" &&
                                    "bg-[var(--filter-mobile-active)]") ||
                                    "bg-white",
                            )}
                        >
                            Categorias
                        </label>
                    </div>
                </div>

                <div className="w-[80%] rounded-[15rem]">
                    {filter == "preço" && (
                        <div className="flex flex-col">
                            <div className="flex flex-row px-[30rem] gap-x-[20rem]">
                                <label className="text-base font-roboto bg-gray-300 rounded-[25rem] border-gray-300 border-b-[1rem] px-[20rem] py-[15rem] cursor-pointer">
                                    Menor preço
                                </label>
                                <label className="text-base font-roboto bg-gray-300 rounded-[25rem] border-gray-300 border-b-[1rem] px-[20rem] py-[15rem] cursor-pointer">
                                    Maior preço
                                </label>
                            </div>

                            <div className="px-[30rem] flex flex-col gap-x-[10rem] mt-[10rem] items-center justify-center">
                                <div className="flex flex-row items-center justify-between w-full">
                                    <label className="text-base font-bold font-roboto">
                                        R$ 50,00
                                    </label>
                                    <label className="text-base font-bold font-roboto">
                                        R$ 20000,00
                                    </label>
                                </div>

                                <input className="w-full" type="range" />

                                <div className="flex flex-row items-center justify-between w-full">
                                    <label className="text-base font-bold font-roboto">
                                        Min
                                    </label>
                                    <label className="text-base font-bold font-roboto">
                                        Max
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}

                    {filter == "categoria" && (
                        <div className="flex flex-col rounded-[15rem]">
                            <div className="flex flex-col gap-y-[1rem] px-[15rem] h-[180rem]  w-full">
                                <div className="grid grid-cols-3  gap-x-[50rem] gap-y-[20rem] overflow-scroll ">
                                    {categorias.map((e) => (
                                        <button className="rounded-[10rem] font-bold font-roboto text-sm bg-gray-300 h-[75rem] ">
                                            {e}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div>Exterior</div>
        </div>
    );
};
