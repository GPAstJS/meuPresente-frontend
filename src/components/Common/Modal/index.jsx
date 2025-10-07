import React from "react";

import { Button } from "../Button";

export const Modal = ({ arr }) => {

    const selectEventHandler = (item) => {

      sessionStorage.setItem('selectedEvent', JSON.stringify(item));
      window.location.href = "/home"

    }

    return (
        <div className="flex absolute flex-col items-center top-[25%] left-[25%] justify-center p-[25rem] w-[1200rem] z-[30] h-[400rem] border-black border-[1rem] bg-white rounded-[40rem]">
            <h1 className="text-xl text-center">
                Os seguintes eventos foram encontrados, por favor, escolha um:
            </h1>

            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left text-base">
                            Data{" "}
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left text-base">
                            Nome
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left text-base">
                            CEP
                        </th>
                        <th className="border border-gray-300 px-4 py-2 text-left text-base">
                            Link de Convite
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {arr.map((item) => (
                        <tr 
                            onClick={() => selectEventHandler(item)}
                            key={item.id}
                            className="border border-gray-300 hover:cursor-pointer hover:bg-[#C4C9D0]"
                        >
                            <td className="border border-gray-300 px-4 py-2 text-base">
                                {item.date}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-base">
                                {item.name}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-base">
                                {item.postalCode}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-base">
                                {item.inviteLink || "N/A"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
