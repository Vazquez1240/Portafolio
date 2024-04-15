import {GitHub, LinkedIn} from "@mui/icons-material";
import {LinkRedes} from "@/components/Link/LinkRedes";

export const Header = () => {
    return (
        <header
            className="mx-auto container px-2 pt-44  lg:pt-0 lg:w-[1240px] lg:flex-row mt-0 lg:max-w-[100%] fixed ">
            <div className="lg:flex lg:justify-between lg:items-center mt-10">
                <div className=" mx-auto mt-10 flex gap-10 justify-start cursor-pointer lg:mt-0">

                    <div className='hover:text-blue-500 transition-colors duration-300'>
                        Proyectos
                    </div>
                    <div className='hover:text-blue-500 transition-colors duration-300'>
                        Experiencia
                    </div>
                    <div className='hover:text-blue-500 transition-colors duration-300'>
                        Proyectos donde participe
                    </div>

                </div>

                <div className='social-container text-right mt-0 flex gap-4 cursor-pointer'>
                    <LinkRedes titulo='LinkedIn' url='https://www.linkedin.com/in/martin-de-la-torre-vazquez-a24549224/'
                               icono={<LinkedIn/>} className='hover:text-blue-500 transition-colors duration-300'/>
                    <LinkRedes titulo='Github' url='https://github.com/Vazquez1240' icono={<GitHub/>}
                               className='hover:text-blue-500 transition-colors duration-300'/>
                </div>
            </div>
        </header>

    )
}