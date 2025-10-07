export const Button = ({ onClick, className, children, type = "submit" }) => {
    return (
        <button
            className={`w-[80%] max-w-[500rem] h-[60rem] gap-[8rem] flex justify-center items-center bg-[var(--default-purple)] text-white rounded-[12rem] cursor-pointer text-xl font-roboto font-bold sm:w-full  ${className}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
};
