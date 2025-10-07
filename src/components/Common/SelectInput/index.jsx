export const SelectInput = ({
    name,
    error,
    label,
    register,
    placeholder,
    divStyle,
    inputStyle,
    labelStyle,
    errorStyle,
    options = [],
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

            <select
                placeholder={placeholder}
                style={{
                    borderColor: error[name] ? "var(--error-input)" : "black",
                }}
                className={`w-full h-[45rem] text-[18rem] text-left font-roboto border-black border-[2rem] px-[10rem] rounded-[15rem] ${inputStyle}`}
                {...register(name)}
            >
                <option value="" className="text-xl">
                    Por Favor Escolha
                </option>

                {options.map((val) => (
                    <option value={val} className="text-xl text-black">
                        {val}
                    </option>
                ))}
            </select>

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
