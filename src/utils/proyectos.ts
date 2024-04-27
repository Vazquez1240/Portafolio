


export const proyectos = [
        {
            titulo: 'Organizacion Oracle',
            descripcionCorta: "Este proyecto fue creado como parte de mi formacion en Oracle One Next, es un organizador creador con react, donde existen diferentes grupos. Tambien puedes crear nuevos grupos con su color establecidos.",
            descripcionCompleta: "Este proyecto fue creado como parte de mi formación en Oracle One Next. Se trata de un organizador desarrollado con React, centrándose exclusivamente en el frontend. La funcionalidad principal de esta aplicación radica en la capacidad de crear secciones donde se puede almacenar información relativa a individuos. Por ejemplo, si contamos con un equipo de desarrollo, podemos registrar los detalles de cada miembro del equipo. Además, la aplicación permite la creación de nuevos grupos, la asignación de colores distintivos a estos grupos y la posibilidad de modificar dichos colores.",
            src : '/img/org-six.png',
            texto : 'organizador',
            altura: '100%',
            ancho: '100%',
            fullstack: false,
            link: 'https://github.com/Vazquez1240/Org',
            envivo: {online:true, link:'https://org-six-coral.vercel.app/'},

        },
        {
            titulo: 'Utiles escolares',
            descripcionCorta: "Este proyecto constituye un sistema de registro para útiles escolares. Permite la creación de paquetes, la marcación de estos como entregados, así como la búsqueda de paquetes mediante la CURP del padre o del hijo.",
            descripcionCompleta: 'Este proyecto representó una evaluación técnica para optar a un puesto en Gobierno Digital de la ciudad de Monterrey, Nuevo León. Consistió en el desarrollo de una aplicación que funcionara como un preregistro para la entrega de útiles escolares. En esta aplicación, el tutor (padre de familia) podía registrar a un beneficiario (hijo) proporcionando datos como su CURP, colonia, municipio, entre otros. Un aspecto crucial de la aplicación es el rol del funcionario, quien puede iniciar sesión y buscar paquetes por número de entrega, CURP del tutor o del hijo. Además, puede verificar el estado del paquete, si ya ha sido entregado o no, y también marcar un paquete como entregado. El proyecto se divide en dos partes: el frontend desarrollado con React y el backend con Django Rest Framework, encargado de la creación de las API REST.',
            src: '/img/utiles-front.png',
            texto: 'utiles-frontend',
            altura: '100%',
            ancho: '100%',
            fullstack: true,
            link: {Backend:'https://github.com/Vazquez1240/Utiles-Backend', Frontend:'https://github.com/Vazquez1240/Utiles-Frontend'}
        },
        {
            titulo: 'Encriptador',
            descripcionCorta: "Este proyecto fue los primeros que hice como parte en mi formacion en Oracle One Next, es un encriptador y desencriptador de texto.",
            descripcionCompleta: 'Este proyecto marcó uno de los primeros hitos en mi formación en Oracle One Next. Se trata de una aplicación diseñada para encriptar y desencriptar texto. Su funcionamiento consiste en cambiar únicamente las vocales en el texto ingresado. Por ejemplo, la "a" se transforma en "ai", la "e" en "enter", la "i" en "imes", la "o" en "ober", y la "u" en "ufat". En el menú lateral derecho, se muestra el texto encriptado junto con un botón para copiarlo. Al pegar este texto en la entrada correspondiente y seleccionar la opción de desencriptar, se restaura el texto a su estado original.',
            src : '/img/desencriptador.png',
            texto: 'encriptador',
            altura: '100%',
            ancho: '100%',
            fullstack: false,
            link: 'https://github.com/Vazquez1240/vazquez1240.github.com/tree/main/encriptador',
            envivo: {online:true, link:'https://vazquez1240.github.io/encriptador/'},
        },
        {
            titulo: 'Alura Geek',
            descripcionCorta: 'Este proyecto fue el ultimo que realize en mi formacion en Oracle One Next, donde es un ecommerce donde se pueden ver productos por categorias o se puede observar un producto en especial',
            descripcionCompleta: 'Este proyecto representó el último hito de mi formación en Oracle One Next. Se trata de una aplicación de comercio electrónico donde los usuarios pueden explorar una variedad de productos. Al iniciar la aplicación, se muestran los productos organizados por categorías, como consolas, juguetes y artículos para el hogar. La aplicación está desarrollada con React y utiliza json-server para simular una API, permitiendo así el consumo de información sobre los productos.',
            src: '/img/alura-geek.png',
            texto: 'Alura Geek',
            altura: '100%',
            ancho: '100%',
            fullstack: false,
            link: 'https://github.com/Vazquez1240/Org',
            envivo: {online:false, link:''},
        },
        {
            titulo: 'Clima',
            descripcionCorta: 'Esta es una app para ver el clima en tu ciudad, esta app esta conectada a una API Meteorologica, donde puedes buscar las ciudades para ver su clima y dependiendo del clima sera la imagen a mostrar.',
            descripcionCompleta: 'Esta aplicación fue un proyecto personal en el que se empleó una API meteorológica para proporcionar información climática de diferentes ciudades. Los usuarios pueden buscar su ciudad para obtener el pronóstico del clima, y según las condiciones climáticas, se muestra una imagen y datos correspondientes. Por ejemplo, si se espera un día soleado, se mostrará una imagen de un sol brillante; si se espera nubosidad, se mostrará un sol entre nubes, y así sucesivamente, ofreciendo diversas representaciones visuales según las condiciones climáticas.',
            link: 'https://github.com/Vazquez1240/vazquez1240.github.com/tree/main/clima',
            src: 'img/clima.png',
            texto: 'Clima',
            altura: '100%',
            ancho: '100%',
            fullstack: false,
            envivo: {online:true, link:'https://vazquez1240.github.io/clima/'},
        },
        {
            titulo: 'Tienda virtual',
            descripcionCorta: 'Esta es una tienda virtual que realice como proyecto final en mi formacion en Tokio School, este proyecto tiene como fin la venta de productos electronicos, como tambien el ingreso de mas productos, se puede hacer un pdf de la compra entre otras cosas.',
            descripcionCompleta: 'Esta ',
            src: 'img/tienda-virtual.png',
            texto: 'Tienda Virtual',
            altura: '100%',
            ancho: '100%',
            fullstack: false,
            envivo: {online:false, link:''},
        }
    ]