import '@mui/material/styles'
import {Button} from "@mui/material";
import {Download, Email} from "@mui/icons-material";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Presentacion = () => {

    let enableAlert = false

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
        <section className=" mx-auto mt-[10%] max-w-[75%] ">
            <div className='text-left lg:flex-col lg:justify-center lg:items-center md:gap-x-4 max-w-[100%] '>
                <div className='flex items-center lg:w-4/5'>
                    <h1 className=" text-3xl font-bold lg:text-5xl  text-dark-700 dark:text-dark-200">
                        <span className=" text-sky-600 ">¡Hola! Soy Martin</span>. Descubre mis
                        proyectos en mi portafolio.
                    </h1>
                    <div className=' w-3/12 '>
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
                <div className='mt-8 flex gap-10'>
                    <Button onClick={descargarCv} className='hover:bg-sky-900 hover:text-white transform transition-transform hover:scale-105 duration-300 inline-flex items-center px-5 text-base font-medium ' startIcon={<Download/>}>Descargar CV</Button>
                    <Button onClick={copiarCorreo} className='hover:bg-sky-900 hover:text-white transform transition-transform hover:scale-105 duration-300 inline-flex items-center px-5 text-base font-medium ' startIcon={<Email/>}>vazquezmartin1240@gmail.com</Button>
                </div>
            </div>
        </section>
    )
}