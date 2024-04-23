import {Card, CardContent, CardActions, Typography} from "@mui/material";
import {CardHeader} from "@mui/material";
import Button from "@mui/material/Button";

export const CardsComponent = (props: { src: any; alt: any; height: any; width: any; titulo: any; descripcion:any;}) => {

    const {src, alt, height, width, titulo, descripcion} = props;

    return (
        <Card className="mt-6 bg-blue-50  h-[96%] sm:w-80 md:w-80 lg:w-90 xl:w-90">
          <header color="blue-gray" className=" max-h-50 ">
            <img
              src={src}
              alt={alt}
              width={width}
              height={height}
            />
          </header>
          <CardContent className='h-[50%]'>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {titulo}
            </Typography>
            <Typography>
                {descripcion}
            </Typography>
          </CardContent>
          <CardActions className="pt-0 justify-end">
            <Button className='bg-indigo-600 text-white hover:bg-indigo-500 '>Ver mas</Button>
          </CardActions>
      </Card>
    )
}