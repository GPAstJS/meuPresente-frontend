import React, { useState } from "react";
import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";

export const Input = ({
    name,
    type,
    error,
    label,
    register,
    placeholder,
    divStyle,
    inputStyle,
    labelStyle,
    control,
    errorStyle,
    maskChar,
    onChange,
    facultativo = false,
    mask = "",
}) => {


    return (
        <div
            className={`flex flex-col h-fit items-start justify-center ${divStyle}`}
        >
            <label
                className={`text-[20rem] text-button font-roboto font-bold text-left ${labelStyle}`}
            >
                {label}
            </label>
            <Controller
                control={control}
                name={name}
                defaultValue={""}
                render={({ field }) =>
                    facultativo ? (
                        <InputMask
                            value={field.value}
                            onChange={(e) => {
                                onChange(e.target.value);
                                field.onChange(e.target.value)
                            }}
                            placeholder="Data"
                            mask={mask}
                            maskChar={maskChar}
                            type={type}
                            style={{
                                borderColor: error[name]
                                    ? "var(--error-input)"
                                    : "black",
                            }}
                            className={`w-full h-[45rem] text-[18rem] text-left font-roboto border-black border-[2rem] px-[10rem] rounded-[15rem] ${inputStyle}`}
                        />
                    ) : (
                        <InputMask
                            value={field.value}
                            onChange={field.onChange}
                            mask={mask}
                            maskChar={maskChar}
                            type={type}
                            style={{
                                borderColor: error[name]
                                    ? "var(--error-input)"
                                    : "black",
                            }}
                            className={`w-full h-[45rem] text-[18rem] text-left font-roboto border-black border-[2rem] px-[10rem] rounded-[15rem] ${inputStyle}`}
                        />
                    )
                }
            />

            {error[name] && (
                <span
                    className={`text-[15rem] font-bold font-roboto text-error text-start w-fit ${errorStyle}`}
                >
                    {error[name].message}
                </span>
            )}
        </div>
    );
};
