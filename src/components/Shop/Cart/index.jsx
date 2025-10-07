import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export const Cart = ({ cart, setCart, setOpen}) => {
    const removeItem = (e) => {
        const map = cart.filter((item) => {
            if (item !== e) {
                return item;
            }
        });
        setCart(map);
    };

    const decreaseAmount = (e) => {
        const map = cart.map((item) => {
            if (e.id === item.id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }

            return item;
        });

        setCart(map);
    };

    const increaseAmount = (e) => {
        const map = cart.map((item) => {
            if (e.id === item.id) {
                return { ...item, quantity: item.quantity + 1 };
            }

            return item;
        });
        setCart(map);
    };

    const calcTotal = () => {
        let sum = 0;

        const map = cart.map((e) => e.price * e.quantity);

        for (let i = 0; i < map.length; i++) {
            sum = sum += map[i];
        }

        return sum.toFixed(2);
    };

    return (
        <div className="bg-cart flex flex-col h-[100%] p-[10rem] w-[525rem] absolute right-0 z-10 overflow-y-scroll">
            <div className="flex flex-row items-center justify-between px-[20rem]">
                <h1 className="text-2xl font-roboto text-white font-bold">
                    MEU CARRINHO
                </h1>
                <IoMdClose onClick={() => setOpen(false)} className="w-[32rem] h-[32rem] fill-white hover:cursor-pointer" />
            </div>

            <div className="flex flex-col justify-center py-[10rem] gap-y-[25rem]">
                {cart?.map((e) => {
                    return (
                        <div className="flex flex-row w-full h-fit border-b-[1rem] py-[15rem] px-[15rem] border-white">
                            <div className="w-[60rem] h-[60rem] bg-black"></div>

                            <div className="flex flex-col w-[25%]">
                                <p className="text-base font-bold text-white px-[10rem]">
                                    {e.name}
                                </p>

                                <p className="text-base font-bold text-white px-[10rem]">
                                    R$ {e.price.toFixed(2)}
                                </p>
                            </div>

                            <div className="flex flex-row w-[60%] justify-between">
                                <div className="flex flex-row border-[1rem] border-white gap-x-[5rem] h-fit items-center px-[5rem]">
                                    <FaMinus
                                        onClick={() => decreaseAmount(e)}
                                        className="w-[16rem] h-[16rem] fill-white hover:cursor-pointer "
                                    />
                                    <p className="text-base font-bold text-white">
                                        {e.quantity}
                                    </p>
                                    <FaPlus
                                        onClick={() => increaseAmount(e)}
                                        className="w-[16rem] h-[16rem] fill-white hover:cursor-pointer"
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-base font-bold text-white">
                                        Total
                                    </p>

                                    <p className="text-base font-bold text-white">
                                        R$ {(e.price * e.quantity).toFixed(2)}
                                    </p>
                                </div>

                                <button
                                    onClick={() => removeItem(e)}
                                    className="text-white underline text-base font-bold h-fit"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {cart.length > 0 && (
                <p className="text-xl text-white font-bold">
                    Total: R$ {calcTotal()}
                </p>
            )}
        </div>
    );
};
