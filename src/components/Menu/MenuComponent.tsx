import { Menu, Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

export const MenuComponent = () => {
    const [estadoMenu, actualizarMenu] = useState(false);

    const manejarCambio = () => {
        actualizarMenu(!estadoMenu);
    };

    const ocultarMenu = () => {
        if (estadoMenu) {
            actualizarMenu(false);
        }
    };

    return (
        <div className={`sm:mt-5 sm:text-white absolute inset-0 h-[12rem] ${estadoMenu ? 'backdrop-blur-sm' : null}`}>
            <Button className="sm:flex sm:ml-[85%]" onClick={manejarCambio} startIcon={estadoMenu ? <Close className="text-white size-7" /> : <Menu className="text-white size-7" />}/>
            <div>
                {estadoMenu ? (
                    <div className={`sm:${estadoMenu ? 'flex' : 'hidden'} sm:mx-auto sm:w-full mt-2`} onClick={ocultarMenu}>
                        <div className="mx-auto sm:flex-col sm:space-y-3 cursor-pointer w-full items-center justify-center">
                            <div className="text-center hover:text-blue-500 transition-colors duration-300">
                                <Link href={"/"} onClick={ocultarMenu}>Home</Link>
                            </div>
                            <div className="text-center hover:text-blue-500 transition-colors duration-300">
                                <Link href={"/proyectos"} onClick={ocultarMenu}>Proyectos</Link>
                            </div>
                            <div className="text-center hover:text-blue-500 transition-colors duration-300">Experiencia</div>
                            <div className="text-center hover:text-blue-500 transition-colors duration-300">Proyectos donde participe</div>
                        </div>
                    </div>
                ) : null}

            </div>
        </div>
    );
};
