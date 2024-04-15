import {Card, CardContent} from "@mui/material";
import '@mui/material/styles'

export const SobreMiComponent = () => {
    // Recordar quitar los hidden del xl y del md
    return (
        <div className='xl:hidden md:hidden sm:hidden mx-auto max-w-[75%] mt-[16%] '>
            <Card  className='  '>
                <CardContent>
                    Bienvenidosd
                </CardContent>
            </Card>
        </div>

    )
}