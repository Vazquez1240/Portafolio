import '@mui/material/styles'
import {Button} from "@mui/material";
import {Download, Email} from "@mui/icons-material";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Presentacion = () => {


    const descargarCv = () => {

        const link = document.createElement("a");
        link.href = '/MartinDeLaTorreVazquez.pdf'
        link.download = 'MartinDeLaTorreVazquez'
        link.click()
        window.URL.revokeObjectURL(link.href);
    }

    const copiarCorreo = () => {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: <p>Correo copiado en portapapeles</p>,
            icon: "success"
        })
        navigator.clipboard.writeText('vazquezmartin1240@gmail.com');
    }

    return (
        <section className=" mx-auto lg:mt-[10%] max-w-[85%] sm:mt-[30%]">
            <div className='text-left lg:flex-col lg:justify-center lg:items-center md:gap-x-4 max-w-[100%] '>
                <div className='flex items-center lg:w-4/5 sm:flex-col md:flex-col sm:h-[15rem] lg:flex-row'>
                    <div className='sm:flex md:flex lg:hidden xl:hidden  w-3/12'>
                        <img className='rounded-[50%]' src='/prueba.png' alt='Prueba' width='250' height='250'/>
                    </div>
                    <h1 className=" text-3xl font-bold lg:text-5xl  text-dark-700 dark:text-dark-200">
                        <span className=" text-sky-600 ">¡Hola! Soy Martin</span>. Descubre mis
                        proyectos en mi portafolio.
                    </h1>
                    <div className='sm:hidden md:hidden lg:flex xl:flex  w-3/12 '>
                        <img className='rounded-[50%]' src='/prueba.png' alt='Prueba' width='250' height='200'/>
                    </div>
                </div>
                <span
                    className=" font-semibold inline-flex bg-[linear-gradient(110deg,#64748b,45%,#0f172a,55%,#64748b)] dark:bg-[linear-gradient(110deg,#b6eaff,45%,#065074,55%,#b6eaff)] bg-[length:250%_100%] bg-clip-text text-xl text-transparent">
                    Desarrollador Fullstack
                </span>
                <div className='w-[75%]'>
                    <h2 className="lg:text-xl md:mt-5 text-dark-700 align-text-top dark:text-dark-200 text-pretty">
                        Soy una persona apasionada por lo que hace, cuento ya con 1 año de experiencia en el desarrollo
                        web como fullstack,
                        actualmente me encuentro trabajando en la secretaria de innovacion y gobierno abierto de la
                        ciudad de Monterrey, Nuevo León.
                    </h2>
                </div>
                <div className='sm:max-w-[90%] lg:flex-row lg:mt-8 lg:gap-10 flex sm:flex-col sm:gap-5 sm:mt-2'>
                    <Button onClick={descargarCv}  className='lg:bg-transparent xl:bg-transparent hover:bg-sky-900 sm:bg-sky-900 sm:text-white hover:text-white transform transition-transform lg:hover:scale-105 duration-300 inline-flex items-center lg:px-5 lg:text-base lg:font-medium sm:text-[10.5px] ' startIcon={<Download/>}>Descargar CV</Button>
                    <Button onClick={copiarCorreo}  className='lg:bg-transparent xl:bg-transparent hover:bg-sky-900 sm:bg-sky-900 sm:text-white hover:text-white transform transition-transform lg:hover:scale-105 duration-300 inline-flex items-center lg:px-5 lg:text-base lg:font-medium sm:text-[10.5px] ' startIcon={<Email/>}>vazquezmartin1240@gmail.com</Button>
                </div>
            </div>
        </section>
    )
}