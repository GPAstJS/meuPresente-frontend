import React from "react";
import { Logo } from "../Logo";

import { useNavigate } from "react-router-dom";

export const Header = ({ className, headerMenu }) => {
    const navigator = useNavigate();

    const url = window.location.href.split("/").slice(-1).join();

    const navLinkStyle = (uri) =>
        `text-sm text-logoCardBorder font-roboto font-bold hover:cursor-pointer sm:text-xl ${(uri === url && "border-[var(--default-purple)] border-b-[2rem]") || "hover:border-[var(--default-purple)] hover:border-b-[2rem]"}`;

    return (
        <div className={`flex flex-row items-center justify-between ${className}`}>
            <Logo
                squareClassName={"bg-logoSquare"}
                markClassName={"text-logoColor font-bold"}
            />

            {headerMenu && (
                <div className="flex flex-row items-center justify-between gap-[100rem]">
                    <a
                        className={navLinkStyle("theme-chooser")}
                        onClick={() => navigator("/theme-chooser")}
                    >
                        Editar meu site
                    </a>
z'
                    <a
                        className={navLinkStyle("present-chooser")}
                        onClick={() => navigator("/present-chooser")}
                    >
                        Lista de presentes
                    </a>

                    <a
                        className={navLinkStyle("my-wallet")}
                        onClick={() => navigator("/my-wallet")}
                    >
                        Minha carteira
                    </a>

                    <a
                        className={navLinkStyle("user-profile")}
                        onClick={() => navigator("/user-profile")}
                    >
                        Minha conta
                    </a>
                </div>
            )}
        </div>
    );
};
