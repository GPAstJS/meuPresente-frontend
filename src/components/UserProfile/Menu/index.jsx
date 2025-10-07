import { MdClose, MdOutlineCreditScore } from "react-icons/md";

import { MdWebAsset } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { CiUser, CiLocationArrow1 } from "react-icons/ci";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

import { Button } from "../../Common/Button";

export const MenuProfile = ({ open, setOpen }) => {
    return (
        <div className="flex flex-col h-screen absolute bg-white w-[275rem] sm:w-[640rem] items-center justify-center z-20 sm:z-0 sm:relative">
            <div>
                <div className="flex items-center gap-[2rem]">
                    <CiUser />
                    <p className="text-xl">Perfil</p>
                    <CiLocationArrow1 className="w-[13rem] h-[13rem] rotate-[136deg]" />
                </div>

                <div className="flex flex-col ml-[35rem] gap-[15rem]">
                    <Button>
                        <FaRegUserCircle />
                        Editar Perfil
                    </Button>

                    <Button>
                        <MdWebAsset />
                        Editar Site
                    </Button>

                    <Button>
                        <IoShieldCheckmarkOutline />
                        Segurança
                    </Button>

                    <Button>
                        <MdOutlineCreditScore />
                        Pagamentos
                    </Button>
                </div>
            </div>
        </div>
    );
};
