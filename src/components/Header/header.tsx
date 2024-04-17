import {GitHub, LinkedIn} from "@mui/icons-material";
import {LinkRedes} from "@/components/Link/LinkRedes";
import {MenuComponent} from "@/components/Menu/MenuComponent";
export const Header = () => {
    return (
        <header className="mx-auto container lg:px-2 lg:pt-1  lg:w-[1240px] lg:flex-row lg:max-w-[100%] fixed sm:max-w-full ">
            <div className="sm:hidden md:hidden  lg:flex xl:flex lg:justify-between lg:items-center mt-10 ">
                <div className=" mx-auto xl:mt-0 flex gap-10 justify-start cursor-pointer">

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
            <div className=' sm:right-0 sm:flex md:block lg:hidden xl:hidden'>
                <MenuComponent />
            </div>
        </header>

    )
}