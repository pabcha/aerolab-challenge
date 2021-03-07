# Aerolab challenge

El desafío propuesto por Aerolab consiste en desarrollar una grilla de productos para un programa de recompensas. La meta principal de este desarrollo consiste en ayudar a los usuarios a canjear productos con los puntos acumulados en el sistema.
Aerolab propone una Interfaz Gráfica inicial que esta sujeta a cualquier mejora que el retador considere necesario, y una [API](https://aerolabchallenge.docs.apiary.io/#) de la cual consumir datos desde una aplicación cliente.

Mas información [aqui](https://aerolab.co/coding-challenge-instructions?utm_campaign=Coding%20Challenge).

## Demo de la aplicación

Para ver el live demo -> [https://frosty-mcclintock-56c9d1.netlify.app/](https://frosty-mcclintock-56c9d1.netlify.app/)
![Demo de la aplicación GIF][demo]

## Funcionalidades (desafío)

El usuario tiene una cantidad definida de puntos y cada producto vale una cantidad de puntos especifica.

- El usuario debería poder filtrar los productos por precio, de mayor a menor y vicecersa.
- El usuario debería poder ver cuantos puntos tienen en su cuenta.
- Debería haber una manera clara para el usuario de ver que productos puede comprar y cuales no.
- El botón de comprar debería estar disponible en los productos que el usuario tiene suficientes puntos para comprar.
- Un botón de "comprar ahora" debería mostrarse cuando el usuario interactúa con un producto que puede comprar.
- Cuando el usuario no puede comprar un producto, debería ver cuantos puntos le faltan para poder comprarlo.
- Un usuario no debería poder comprar un producto del cual no tiene suficientes puntos para comprar.
- Cuando el usuario compra, la cantidad de puntos debe ser deducida automaticamente de los puntos disponibles.

## Funcionalidades adicionales

- El usuario puede agregar puntos a su cuenta.
- El usuario puede ver los ultimos productos canjeados.
- El usuario puede ver un raking de canjes por categoria.
- El paginador utiliza url parameters.
- Los usuarios no pueden comprar si no tienen los puntos suficientes. Se motiva al usuario a realizar la operación para agregar puntos sino cuenta con la cantidad requerida.

## Stack tecnológico

- [Node 14.15.0][node]
- [NPM 6.14.5][node]
- [Angular 11.1][angular]
- [Angular CLI][cli]
- UI modules:
  - [ng-zorro][ng-zorro] UI component: `tooltip`, `modal`, `select`, `icon` and more.
  - [ngx-chartjs]
- [Netlify][netlify]

[cli]: https://cli.angular.io/
[angular]: https://angular.io/
[ng-zorro]: https://ng.ant.design/docs/introduce/en
[node]: https://nodejs.org/
[ngx-chartjs]: https://github.com/scttcper/ngx-chartjs
[netlify]: https://www.netlify.com/

## Instalación

```sh
$ git clone https://github.com/pabcha/aerolab-challenge.git
$ cd aerolab-challenge
$ npm install
$ ng serve
```

En el navegador ir a http://localhost:4200

[demo]: src/assets/images/addpoints-aerolab-challenge.gif
