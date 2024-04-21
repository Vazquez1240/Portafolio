import {Card, CardContent} from "@mui/material";


export const CardsComponent = (props: { src: any; alt: any; height: any; width: any; }) => {

    const {src, alt, height, width} = props;

    return (
        <Card className="lg:max-w-[60%] sm:max-w-[80%] sm:mt-4">
            <CardContent className=' flex justify-center'>
                <img src={src} alt={alt} height={height} width={width}/>
            </CardContent>
        </Card>
    )
}