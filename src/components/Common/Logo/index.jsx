import { useNavigate } from "react-router-dom";

export const Logo = ({ squareClassName, markClassName }) => {
    const navigator = useNavigate();

    return (
        <div
            className="relative w-fit flex flex-row items-center justify-center hover:cursor-pointer"
            onClick={() => navigator("#")}
        >
            <div
                className={`rotate-45 z-[10] h-[24rem] w-[24rem] absolute left-[0rem] sm:w-[25rem] sm:h-[25rem] ${squareClassName}`}
            />

            <p
                className={`text-xl z-[20] text-center ${markClassName} font-roca sm:text-base`}
            >
                Meu Presente
            </p>
        </div>
    );
};
