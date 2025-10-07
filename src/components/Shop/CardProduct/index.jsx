export const CardProduct = ({ label, price, image, onClick}) => {
    return (
        <div className="2xl:h-[375rem] 2xl:w-[250rem] xl:h-[330rem] xl:w-[200rem] lg:h-[300rem] lg:w-[200rem] md:h-[300rem] md:w-[175rem] sm:h-[275rem] sm:w-[150rem] bg-white rounded-[25rem] flex flex-col items-center  gap-y-[15rem] py-[15rem]">
            {image}
            <div className="h-[75%] w-[90%] bg-black rounded-[30rem]"></div>

            <label className="2xl:text-base xl:text-sm lg:text-sm font-bold font-roboto w-[90%] sm:text-sm text-center">
                {label}     
            </label>

            <label className="2xl:text-xl xl:text-base lg:text-sm font-bold font-roboto w-[250rem] sm:text-sm text-center">
                {price}
            </label>

            <button onClick={onClick} className="w-[90%] xl:h-[50rem] lg:h-[50rem] 2xl:text-xl xl:text-base lg:text-sm text-white font-bold font-roboto sm:h-[30rem] sm:text-sm bg-logoCardBorder rounded-[15rem]">
                PRESENTEAR
            </button>
        </div>
    );
};
