export const Card = ({
    cardStyle,
    cardName,
    cardImage,
    cardImageAlt,
    cardNameStyle,
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            className="flex flex-col w-fit h-fit items-center gap-y-[6rem] hover:scale-[1.2] hover:cursor-pointer duration-300 relative"
        >
            <div className={cardStyle}>
                <img
                    className="rounded-[30rem] w-full h-full"
                    src={cardImage}
                    alt={cardImageAlt}
                />
            </div>

            <h2 className={cardNameStyle}>{cardName}</h2>
        </div>
    );
};
