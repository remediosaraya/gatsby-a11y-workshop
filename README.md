# Creación de sitios accesibles con Gatsby

Aprenda las técnicas y herramientas necesarias para crear aplicaciones web inclusivas con Gatsby y React.js del Jefe de Aprendizaje de Gatsby, Marcy Sutton.

Presentado en:
- [Gatsby Meetup San Jose CR 2020-02] 
- [Gatsby Days LA @marcysutton] (https://www.gatsbyjs.com/gdla-a11y-workshop/)
- [Smashing Conf NYC @marcysutton] (https://smashingconf.com/ny-2019/)

Algunas conclusiones clave:

- Comprender cómo incorporar la accesibilidad en su flujo de trabajo de desarrollo web.
- Depurar o comprobar accesibilidad de sus sitios y aplicaciones utilizando las últimas herramientas.
- Aplicar accesibilidad a las aplicaciones web React con Gatsby, mientras aprende cómo se aplica la accesibilidad a otras stacks.
- ¡Aprenda los beneficios de las pruebas manuales y automatizadas para aumentar las superpotencias de accesibilidad web!
- Integre la gestión de foco en sus aplicaciones web, manejando las interacciones del teclado y el lector de pantalla.
- Practique anunciando cambios de vista con su código y manteniendo actualizados a los usuarios de lectores de pantalla.
- Logre victorias con marcado semántico, animación discreta y mejora progresiva.

URL de la aplicación: https://remediosaraya.github.io/gatsby-a11y-workshop

Diapositivas del taller: https://remediosaraya.github.io/gatsby-a11y-workshop/slides/

---

Este proyecto se inició con [gatsby-starter-mdx-basic] (https://github.com/christopherbiscardi/gatsby-starter-mdx-basic) y [@mdx-deck/theme] (https://github.com/jxnblk/mdx-deck/tree/master/packages/gatsby-theme).

_Nota: Este repositorio requiere que estén instalados [Node.js 12 y npm] (https://nodejs.org) ._

1. Instale Gatsby CLI:

```sh
npm install -g gatsby-cli
```

1. Crea un nuevo sitio Gatsby y set de slides usando este starter

```sh
gatsby new gatsby-a11y-workshop https://github.com/remediosaraya/gatsby-a11y-workshop
```

3. Vaya al directorio e inicie el servidor de desarrollo.

```sh
cd gatsby-a11y-workshop
gatsby develop
```

    Ver en un navegador: http: // localhost: 8000

4. Editar archivos:

    - Páginas del sitio: [`src / pages / *`] (https://github.com/remediosaraya/gatsby-a11y-workshop/blob/master/src/pages)
    - Componentes del sitio: [`src / components / *`] (https://github.com/remediosaraya/gatsby-a11y-workshop/blob/master/src/components)
    - Plantillas: [`src / templates / *`] (https://github.com/remediosaraya/gatsby-a11y-workshop/blob/master/src/templates)
    - Contenido de la diapositiva: [`src / slides / index.mdx`] (https://github.com/remediosaraya/gatsby-a11y-workshop/blob/master/src/slides/index.mdx)

5. Para ver las respuestas de los ejercicios, consulte el directorio [`/examples`font>(https://github.com/remediosaraya/gatsby-a11y-workshop/blob/master/examples) en la rama` master`

También puede consultar la rama `soluciones` para ver todo en acción: https://github.com/remediosaraya/gatsby-a11y-workshop/tree/solutions

### Prerrequisitos
1. Tener instalado un editor de texto, es decir, VSCode
2. Tenga instalado Node.js 12+, Yarn y npm