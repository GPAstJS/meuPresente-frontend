import { useState, useEffect } from "react";

import { ImGift } from "react-icons/im";
import { CiSearch } from "react-icons/ci";

import Pagination from "../components/Common/Pagination";

import { Cart } from "../components/Shop/Cart";
import { CardProduct } from "../components/Shop/CardProduct";

import { Header } from "../components/Common/Header";

const itemsPerFetch = 200;
const itemsPerPage = 15;

export const Shop = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const refreshWidth = () => {
            setInnerWidth(window.innerWidth);
        };

        window.addEventListener("resize", refreshWidth);

        return () => window.removeEventListener("resize", refreshWidth);
    }, []);

    const [open, setOpen] = useState(false);

    const [items, setItems] = useState([]);

    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        fetch(
            `http://localhost:3001/products?_page=${currentPage}&_per_page=${itemsPerPage}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            },
        )
            .then((response) => response.json())
            .then((data) => {
                setItems(data.data);
            });
    }, [currentPage]);

    const handleOpen = () => {
        setOpen(!open);
    };

    const addItem = (e) => {
        const filter = cart.filter((item) => e.id == item.id);

        if (filter.length > 0) {
            const increase = cart.map((item) => {
                if (item.id === e.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCart(increase);
        } else {
            setCart([...cart, { ...e, quantity: 1 }]);
        }
    };

    return (
        <div className="w-full  flex flex-col items-center h-screen relative">
            <div className="flex flex-row items-center w-full px-[60rem] h-[60rem] ">
                <Header className={"justify-between w-full"} />
            </div>

            <div className="w-full bg-grayVariation flex flex-row px-[20rem]  gap-x-[1%] relative">
                {open && <Cart cart={cart} setCart={setCart} setOpen={setOpen} />}
                {innerWidth > 1024 && (
                    <div className="w-[20%] h-fit flex flex-col bg-white rounded-[15rem] mt-[35rem] border-gray-500 border-[0.5px] 2xl:xl:lg:py-[50rem] sm:py-[15rem] ">
                        <div className="border-black border-b-[2rem]">
                            <div className="px-[15rem] 2xl:xl:lg:py-[15rem] sm:py-0 sm:p-[5rem]">
                                <p className="2xl:xl:text-base lg:text-sm sm:text-sm  text-logoCardBorder font-roboto font-bold">
                                    ORDENAR POR PREÇO
                                </p>

                                <div className="flex flex-row justify-between 2xl:xl:px-[15rem] mt-[15rem]">
                                    <p className="2xl:xl:text-base lg:text-sm sm:text-sm text-logoCardBorder font-roboto font-bold">
                                        R$50,00
                                    </p>
                                    <p className="2xl:xl:text-base lg:text-sm sm:text-sm text-logoCardBorder font-roboto font-bold">
                                        R$2000,00
                                    </p>
                                </div>

                                <div>
                                    <input className="w-full" type="range" />
                                </div>

                                <div className="flex flex-row justify-between 2xl:xl:lg:px-[15rem] sm:p-0 mt-[10rem] ">
                                    <p className="2xl:xl:lg:text-base sm:text-sm font-roboto font-bold">
                                        Mínimo
                                    </p>
                                    <p className="2xl:xl:lg:text-base sm:text-sm font-roboto font-bold">
                                        Máximo
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-col mt-[50rem] border-black border-b-[2rem]">
                            <div className="flex flex-col w-full px-[15rem]">
                                <p className="2xl:xl:lg:text-base sm:text-sm text-logoCardBorder font-roboto font-bold">
                                    FILTRAR POR TIPO DE PRESENTE:
                                </p>

                                <div className="w-full border-black border-[1rem] 2xl:xl:lg:h-[60rem] sm:h-[30rem] my-[10rem] flex flex-row items-center 2xl:xl:lg:px-[15rem] sm:px-[5rem]">
                                    <input
                                        className="w-[90%] 2xl:xl:lg:text-base sm:text-sm font-bold font-roboto overflow-hidden"
                                        placeholder="Pesquisar..."
                                        type="text"
                                    />

                                    <CiSearch className="h-[24rem] w-[24rem]" />
                                </div>

                                <div>
                                    <p className="2xl:xl:lg:text-base sm:text-sm   font-bold font-roboto ">
                                        Filtrar por tipo de presente
                                    </p>
                                </div>

                                <div className="flex flex-col py-[15rem] gap-y-[10rem]">
                                    <div className="flex flex-row items-center gap-x-[5rem]">
                                        <input type="checkbox" />

                                        <label className="2xl:xl:lg:text-sm sm:text-xs font-bold font-roboto">
                                            EXPERIÊNCIAS E VIAGENS
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-[5rem]">
                                        <input type="checkbox" />

                                        <label className="2xl:xl:lg:text-sm sm:text-xs font-bold font-roboto">
                                            EXPERIÊNCIAS E VIAGENS
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-[5rem]">
                                        <input type="checkbox" />

                                        <label className="2xl:xl:lg:text-sm sm:text-xs  font-bold font-roboto">
                                            EXPERIÊNCIAS E VIAGENS
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full flex flex-col mt-[50rem] border-black border-b-[2rem]">
                            <div className="flex flex-col w-full px-[1">
                                <p className="2xl:xl:lg:text-base sm:text-sm  text-logoCardBorder font-roboto font-bold">
                                    CATEGORIAS:
                                </p>

                                <div>
                                    <p className="2xl:xl:lg:text-xl sm:text-sm  font-bold font-roboto ">
                                        Eletrodomésticos
                                    </p>
                                </div>

                                <div className="flex flex-col py-[15rem] gap-y-[10rem]">
                                    <div className="flex flex-row items-center gap-x-[5rem]">
                                        <input type="checkbox" />

                                        <label className="2xl:xl:lg:text-sm sm:text-xs font-bold font-roboto">
                                            EXPERIÊNCIAS E VIAGENS
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-[5rem]">
                                        <input type="checkbox" />

                                        <label className="2xl:xl:lg:text-sm sm:text-xs font-bold font-roboto">
                                            EXPERIÊNCIAS E VIAGENS
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center gap-x-[5rem]">
                                        <input type="checkbox" />

                                        <label className="2xl:xl:lg:text-sm sm:text-xs  font-bold font-roboto">
                                            EXPERIÊNCIAS E VIAGENS
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="w-full h-[830rem] flex flex-col relative">
                    <div className="flex flex-row max-w-[1050rem]  py-[15rem] items-center justify-between mb-[5rem]">
                        <h1 className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-base sm:text-xl font-roboto font-bold">
                            LISTA DE PRESENTES
                        </h1>

                        <div className="flex flex-row w-fit gap-x-[15rem] items-center justify-center">
                            <Pagination
                                itemsPerPage={itemsPerPage}
                                itemsPerFetch={itemsPerFetch}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />

                            <div
                                onClick={() => handleOpen()}
                                className="flex items-center justify-center  rounded-[15rem] h-[60rem] w-[100rem] hover:cursor-pointer"
                            >
                                <ImGift className="w-[48rem] h-[48rem] fill-black opacity-85" />
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-4 2xl:grid-cols-5 gap-y-[25rem] overflow-y-scroll h-[100%]">
                        {items.map((e, i) => (
                            <CardProduct
                                key={i}
                                onClick={() => addItem(e)}
                                price={`R$ ${e.price.toFixed(2)}`}
                                label={e.name}
                                cart={cart}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* {innerWidth <= 1024 && show === true && <MobileFilter />} */}

            {/* <MobileFilter /> */}
        </div>
    );
};
