<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el respositorio
2. Ejecutar 
```
yarn instal
```

3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```

5. Clonar el archivo __.env.template__ y renombrar la copia __.env__

6. Poner valor a las variables de entorno definidas en el __.env__

7. Ejecutar la aplicacion en dev:
```
yarn start:dev
```

8. Meter valores de prueba en la base de datos con la semilla
```
https://localhost:3000/api/v2/seed
```

# Production build
1. Crear el archivo ```.env.prod.```
2. Llenar las variables de entorno de prod
3. Crear la nueva imagen
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```





## Stack usado
* MongoDB
* Nest