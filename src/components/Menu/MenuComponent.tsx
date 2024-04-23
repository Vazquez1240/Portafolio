'use client'

import {Menu, Close} from "@mui/icons-material";
import {Button} from "@mui/material";
import {useState} from "react";
import Link from "next/link";

export const MenuComponent = () => {

    let [estado_menu, actualizarMenu] = useState(false)


    const manejarCambio = (event:any) => {
        actualizarMenu(!estado_menu)
        console.log(estado_menu)
    }

    return (
        <div className={` sm:mt-5 sm:text-white absolute inset-0 h-[12rem] ${estado_menu ? 'backdrop-blur-sm' : null} `}>
            <Button className='sm:flex sm:ml-[85%]' onClick={manejarCambio}
                    startIcon={estado_menu ? <Close className='text-white size-7'/> :
                        <Menu className='text-white size-7'/>}/>
            <div>
                {
                    estado_menu ?

                        <div className={`sm:${estado_menu ? 'flex' : 'hidden'}  sm:mx-auto sm:w-full mt-2 `}>
                            <div className=" mx-auto  sm:flex-col sm:space-y-3 cursor-pointer w-full items-center justify-center  ">

                                <div   className=' text-center hover:text-blue-500 transition-colors duration-300'>
                                    <Link href={'/proyectos'} >Proyectos</Link>
                                </div>
                                <div className=' text-center hover:text-blue-500 transition-colors duration-300'>
                                    Experiencia
                                </div>
                                <div className=' text-center hover:text-blue-500 transition-colors duration-300'>
                                    Proyectos donde participe
                                </div>
                            </div>
                        </div> :

                        null
                }
            </div>
        </div>
    )
}