import {Button, Dialog} from "@mui/material";
import DialogContent from '@mui/material/DialogContent';
import {DialogTitle, DialogActions} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/Button';


export const CardVerMas = (props:any) => {

    let {actualizarValor, visible, titulo, descripcion, link, fullstack} = props;

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
                        <Button >Repositorio BackEnd</Button>
                        <Button>Repositorio FrontEnd</Button>
                        <Button>Repositorio completo</Button>
                    </div>:
                    <div>no es full</div>}
            </DialogActions>
        </Dialog>
    )
}