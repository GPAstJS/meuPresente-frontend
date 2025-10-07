import React from "react";

import { Input } from "../Input/index";

export const Form = ({ titulo, renders, btns, containerStyle }) => {
    return (
        <div
            className={`w-[65%] flex flex-col items-center justify-center ${containerStyle}`}
        >
            <h2 className="font-roboto font-bold text-[#31241E] w-full text-left text-[40rem] sm:text-xl">
                {titulo}
            </h2>

            {renders.map((e, i) => (
                <div key={i} className="flex flex-col w-full">
                    <Input
                        key={e.name + i}
                        name={e.name}
                        label={e.label}
                        error={e.error}
                        register={e.register}
                        placeholder={e.placeholder}
                        control={e.control}
                        mask={e.mask}
                        maskChar={e.maskChar}
                        divStyle={"gap-[10rem]"}
                        inputStyle={`w-full font-roboto border-black border-[2rem] px-[10rem] rounded-[15rem] h-[60rem] ${e.inputStyle}`}
                        labelStyle={`text-[#5e5b8e] font-roboto font-bold text-left w-full ${e.labelStyle}`}
                    />
                </div>
            ))}

            <div className="flex items-center justify-center gap-[20rem] w-full">
                {btns.map((btn, i) => (
                    <button
                        key={i}
                        onClick={btn.onClick}
                        className={`w-[85%] h-[50rem] text-xl font-roboto font-bold text-white bg-button rounded-[25rem] ${btn.style}`}
                        type="submit"
                    >
                        {btn.label}
                    </button>
                ))}
            </div>
        </div>
    );
};
