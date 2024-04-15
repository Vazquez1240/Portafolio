import {Menu} from "@mui/icons-material";
import {Button} from "@mui/material";

export const MenuComponent = () => {


    return (
        <div className='sm:mt-2 sm:text-white'>
            <Button startIcon={<Menu className='text-white size-7'/>}/>
        </div>
    )
}