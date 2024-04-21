import {Card, CardContent} from "@mui/material";
import {Header} from "@/components/Header/header";
import {CardsComponent} from "@/components/Cards/CardsComponent";
import {proyectos} from "@/utils/proyectos";
export default function ProyectosPage() {


    return (
        <main
            className='absolute top-0 z-[-2] h-screen w-full bg-dark-50 dark:bg-dark-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,153,255,0.25),rgba(255,255,255,0))]'>
            <Header/>
            <div className='flex justify-center items-center sm:mt-[5rem] lg:mt-[7rem] xl:mt-[7rem]'>
                <div
                    className='flex flex-col justify-center items-center sm:mt-4 lg:grid lg:grid-cols-3 lg:gap-4 lg:max-w-[90%] xl:grid xl:grid-cols-3 xl:gap-4 xl:max-w-[90%]'>
                    {proyectos.map((proyecto, index) => (
                        <CardsComponent
                            key={index}
                            src={proyecto.src}
                            alt={proyecto.texto}
                            height={proyecto.altura}
                            width={proyecto.ancho}
                        />
                    ))}
                </div>
            </div>
        </main>

    )
}