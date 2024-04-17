import {Menu} from "@mui/icons-material";
import {Button} from "@mui/material";
import {useState} from "react";

export const MenuComponent = () => {

    let [estado_menu, actualizarCurp] = useState(false)

    const manejarCambio = (event:any) => {
        console.log(event.target)
        console.log('cd')

    }

    return (
        <div className='sm:mt-2 sm:text-white'>
            <Button onClick={manejarCambio} startIcon={<Menu className='text-white size-7'/>}/>

        </div>
    )
}