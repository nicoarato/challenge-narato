# Resumen

El repositorio contiene 2 carpetas:
* Backend
* Fronted

## Para visualizar este proyecto.

1- Descargar o clonar el repositorio.

2- Correr el backend ejecutar: 
```
cd /backend
npm install
nodemon index.js
```

3- Correr aplicación frontend
```
cd /frontend
npm install
npm start
```
---

## Stack tecnológico
### Backend

```
node    : v14.17.6
express : 4.17.1
```
### Frontend

```
react   : 17.0.2
```

---

## Requerimientos
 En base a los diseños dados, construir las siguientes tres vistas:

- Caja de búsqueda
- Resultados de la búsqueda
- Detalle del producto


Las vistas son navegables de manera independiente y cuentan con su propia url:

- Caja de Búsqueda: ​"/"
- Resultados de la búsqueda: ​"/items?search="
- Detalle del producto: ​"/items/:id"

Construir los siguientes endpoints para ser utilizados desde las vistas:

- /api/items?q=**:query**

y devolver los resultados en el formato indicado:

```
{
    "author":{
        "name": String
        "lastname": String
    },
    categories: [String, String, String, ...],
    items: [
        {
            "id": String,
            "title": String,
            "price": {
                "currency": String,
                "amount": Number,
                "decimals": Number
            },
            "picture": String,
            "condition": String,
            "free_sheeping": Boolean
        },
        {...},
        {...}
    ]
}
```

- /api/items/**:id**

Debe consultar los siguientes endpoints:

`https://api.mercadolibre.com/items/`**:id**

`https://api.mercadolibre.com/items/`**:id**`/description`

Y devolver los resultados en el formato indicado:

```

{
    "author":{
        "name": String
        "lastname": String
    },
    "item": {
        "id": String,
        "title": String,
        "price": {
            "currency": String,
            "amount": Number,
            "decimals": Number
        },
        "picture": String,
        "condition": String,
        "free_shipping": Boolean,
        "sold_quantity": Number,
        "description": String
    }
}

```
---

## Descripción Funcional de la aplicación

- En la vista de caja de búsqueda, debería poder ingresar el producto a buscar y enviar el formulario navegar a la vista de Resultados de búsqueda, solo 4 productos. Luego, al hacer click sobre uno de ellos, debería navegar a la vista de Detalle de Producto.

- Dado un id de producto, debería poder ingresar directamente a la vista de detalle de producto.

---

### Durante el desarrollo del proyecto
Para llevar a cabo esta esta entrega se utilizaron las siguientes instalaciones:

Para el backend:
1. nodemon

Para el frontend:

1. node-sass
2. react-router-dom
