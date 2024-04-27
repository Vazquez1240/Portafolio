import {Button, Dialog} from "@mui/material";
import DialogContent from '@mui/material/DialogContent';
import {DialogTitle, DialogActions} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/Button';
import Link from 'next/link'

export const CardVerMas = (props:any) => {

    let {actualizarValor, visible, titulo, descripcion, link, fullstack, envivo} = props;


    const cerrarVentana = () => {
        actualizarValor(false)
    }

    return (
        <Dialog open={visible}>
            <div className='sm:w-full flex justify-end'>
                <IconButton
                    onClick={cerrarVentana}
                    sx={{
                    color: 'darkblue'
                  }}>
                    <CloseIcon />
                </IconButton>
            </div>
                <DialogTitle sx={{top:1}}>
                    {titulo.toUpperCase()}
                </DialogTitle>
            <DialogContent dividers>
                {descripcion}
            </DialogContent>
            <DialogActions>
                {fullstack ?
                    <div className='flex'>
                        <Button><Link href={link.Backend}>Repositorio BackEnd</Link></Button>
                        <Button><Link href={link.Frontend}>Repositorio Frontend</Link></Button>
                    </div>
                    :
                    <div className='flex gap-2'>
                        {
                            envivo.online ?
                                <Button><Link href={envivo.link}>En vivo</Link></Button>: null
                        }
                        <Button><Link href={link}>Ver repositorio</Link></Button>
                    </div>
                }
            </DialogActions>
        </Dialog>
    )
}