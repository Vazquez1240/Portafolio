'use client'

import {Card, CardContent, CardActions, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {CardVerMas} from "@/components/Cards/CardVerMas";
import {useState} from "react";

export const CardsComponent = (props: { src: any; alt: any; height: any; width: any; titulo: any; descripcion:any; descripcionCompleta:any; link:any; fullstack:any; envivo:any}) => {

    const {src, alt, height, width, titulo, descripcion, descripcionCompleta, link, fullstack, envivo} = props;

    const [showCardVerMas, setShowCardVerMas] = useState(false);

    const handleVerMasClick = () => {
        setShowCardVerMas(true);
    }


    return (
        <Card className="mt-6 bg-blue-50  h-[96%] sm:w-80 md:w-80 lg:w-90 xl:w-90">
          {showCardVerMas && <CardVerMas actualizarValor={setShowCardVerMas}  visible={showCardVerMas} titulo={titulo} descripcion={descripcionCompleta} link={link}
                                                                              fullstack={fullstack} envivo={envivo}/>}
          <header color="blue-gray" className=" max-h-50 ">
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
            />
          </header>
          <CardContent className='h-[50%] overflow-auto'>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {titulo}
            </Typography>
            <Typography>
                {descripcion}
            </Typography>
          </CardContent>
          <div className='flex justify-end top-0'>
              <CardActions>
                <Button onClick={handleVerMasClick} className='bg-indigo-600 text-white hover:bg-indigo-500 '>Ver mas</Button>
              </CardActions>
          </div>
      </Card>
    )
}