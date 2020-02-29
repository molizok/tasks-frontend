# TasksFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# API CALLS

# GET Requests

### Recuperar Todas as Tasks

- ```http://localhost:9001/tasks/all```

```shell script
curl -X GET http://localhost:9001/tasks/all
```

- Resposta esperada:

Array de :

chave | tipo | valor exemplo |
------|------|---------------|
id    | number | 123 |
title | string | "Minha task 1" |
description | string | "Minha descrição da task" |
status | number | 0 -> false (não checkada) ou 1 -> true (checkada) |

```javascript

[
    {
        id: 123,
        title: "minha task 1",
        description: "minha task 1",
        status: 0
    },
    {
        id: 123,
        title: "minha task 1",
        description: "minha task 1",
        status: 0
    },
    ...
]

```

### Recuperar Uma Task

- ```http://localhost:9001/tasks/:id```

```shell script
curl -X GET http://localhost:9001/tasks/123
```

```json
{
    "id": 123,
    "title": "minha task 1",
    "description": "minha task 1",
    "status": 0
}
```


# POST Requests

## Nova Task

- ```http://localhost:9001/tasks/post```

```shell script
curl -X POST http://localhost:9001/tasks/post -H "Content-Type: application/json" -d "{title: 'minha task 1', description: 'minha descrição de alguma coisa que eu vou fazer', 'status': 0}"
```

- Json envio:

chave | tipo | valor exemplo |
------|------|---------------|
title | string | "Minha task 1" |
description | string | "Minha descrição da task" |
status | number | 0 -> false (não checkada) ou 1 -> true (checkada) |

```json
{
    "title": "minha task 1",
    "description": "minha descrição de alguma coisa que eu vou fazer",
    "status": 0
}
```

- Resposta esperada:

| objecto | tipo   | Esperado |
|---------|--------|----------|
|status   | string | success \|\| error 


Exemplo:

```javascript
{
    status: 'success'
}
```

### -  Alterar status da task

- ```http://localhost:9001/tasks/status/:id_task```

```shell script
curl -X GET http://localhost:9001/tasks/status -d {id: 123, status: 0}
```

- Json envio:

chave | tipo | valor exemplo |
------|------|---------------|
id | number | 123 |
status | number | 0 -> false (não checkada) \|\| 1 -> true (checkada) |

- Resposta esperada:

| objecto | tipo   | Esperado |
|---------|--------|----------|
|status   | string | success \|\| error 


Exemplo:

```javascript
{
    status: 'success'
}
```
