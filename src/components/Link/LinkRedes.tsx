

export const LinkRedes = (props: any) => {

    const {url, icono, titulo} = props;

    return(
        <div>
            <a
                target="_blank"
                href={url} className='hover:text-blue-500 transition-colors duration-300' title={titulo}>
                {icono}
            </a>
        </div>
    )
}